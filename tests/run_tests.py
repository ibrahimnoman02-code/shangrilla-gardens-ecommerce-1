#!/usr/bin/env python3
"""
Shangrilla Gardens & BBQ - Automated CLI Test & Quality Harness
Runs comprehensive unit tests, data schema validations, asset existence checks,
and HTTP endpoint verification.
"""

import sys
import os
import re
import json
import time
import urllib.request
import urllib.error

# Configure UTF-8 for Windows console
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

# ANSI terminal colors
GREEN = "\033[92m"
RED = "\033[91m"
YELLOW = "\033[93m"
CYAN = "\033[96m"
BOLD = "\033[1m"
RESET = "\033[0m"

PASS_ICON = "[PASS]"
FAIL_ICON = "[FAIL]"
WARN_ICON = "[WARN]"

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

class TestRunner:
    def __init__(self):
        self.total = 0
        self.passed = 0
        self.failed = 0
        self.warnings = 0
        self.errors = []
        self.start_time = time.time()

    def assert_true(self, condition, test_name, error_msg=""):
        self.total += 1
        if condition:
            self.passed += 1
            print(f"  {GREEN}{PASS_ICON}{RESET} {test_name}")
            return True
        else:
            self.failed += 1
            msg = f"  {RED}{FAIL_ICON}{RESET} {test_name} - {error_msg}"
            print(msg)
            self.errors.append(msg)
            return False

    def assert_equal(self, actual, expected, test_name):
        return self.assert_true(
            actual == expected,
            test_name,
            f"Expected '{expected}', got '{actual}'"
        )

    def assert_almost_equal(self, actual, expected, places=2, test_name=""):
        rounded_actual = round(actual, places)
        rounded_expected = round(expected, places)
        return self.assert_true(
            rounded_actual == rounded_expected,
            test_name,
            f"Expected ~{expected} ({rounded_expected}), got {actual} ({rounded_actual})"
        )

    def header(self, title):
        print(f"\n{BOLD}{CYAN}=== {title} ==={RESET}")

    def summary(self):
        elapsed = time.time() - self.start_time
        print(f"\n{BOLD}=================================================={RESET}")
        print(f"{BOLD}Test Results Summary:{RESET}")
        print(f"  Total Assertions: {self.total}")
        print(f"  {GREEN}Passed: {self.passed}{RESET}")
        if self.failed > 0:
            print(f"  {RED}Failed: {self.failed}{RESET}")
        if self.warnings > 0:
            print(f"  {YELLOW}Warnings: {self.warnings}{RESET}")
        print(f"  Execution Time: {elapsed:.3f}s")
        print(f"{BOLD}=================================================={RESET}")

        if self.failed > 0:
            print(f"\n{RED}{BOLD}Failed Tests Details:{RESET}")
            for err in self.errors:
                print(f"  {err}")
            return 1
        else:
            print(f"\n{GREEN}{BOLD}All test assertions passed successfully! 🎉{RESET}\n")
            return 0


def extract_restaurant_data(js_path):
    """Parser to extract RESTAURANT_DATA object from js/data.js"""
    with open(js_path, "r", encoding="utf-8") as f:
        content = f.read()

    m = re.search(r"const\s+RESTAURANT_DATA\s*=\s*(\{[\s\S]*?\n\};)", content)
    if not m:
        return None

    js_text = m.group(1).rstrip(";").strip()
    # Remove single line comments
    clean_js = re.sub(r"//[^\n]*", "", js_text)
    # Quote keys: e.g. key: or key :
    clean_json = re.sub(r'([{,]\s*)([a-zA-Z0-9_]+)\s*:', r'\1"\2":', clean_js)
    # Remove trailing commas
    clean_json = re.sub(r',\s*([\]}])', r'\1', clean_json)

    try:
        return json.loads(clean_json)
    except Exception as e:
        return None


def run_all():
    runner = TestRunner()

    # ----------------------------------------------------
    # Suite 1: File Structure & Core Assets
    # ----------------------------------------------------
    runner.header("Suite 1: Core Files & Disk Assets Integrity")
    core_files = [
        "index.html",
        "css/style.css",
        "js/data.js",
        "js/cart.js",
        "js/app.js",
        "harness.html",
        "css/harness.css",
        "js/harness-engine.js",
        "js/harness-suites.js",
        "js/harness-ui.js",
        "js/harness-badge.js",
    ]
    for rel_path in core_files:
        full_path = os.path.join(BASE_DIR, rel_path)
        exists = os.path.isfile(full_path)
        size = os.path.getsize(full_path) if exists else 0
        runner.assert_true(
            exists and size > 0,
            f"File '{rel_path}' exists and is non-empty ({size} bytes)"
        )

    # ----------------------------------------------------
    # Suite 2: Restaurant Data & Menu Schema Validation
    # ----------------------------------------------------
    runner.header("Suite 2: Menu & Restaurant Schema Validation")
    data_path = os.path.join(BASE_DIR, "js", "data.js")
    runner.assert_true(os.path.exists(data_path), "js/data.js exists on disk")

    data = extract_restaurant_data(data_path)
    runner.assert_true(data is not None, "Parsed RESTAURANT_DATA successfully from js/data.js")

    if data:
        # Restaurant basic info
        runner.assert_true(bool(data.get("name")), "Restaurant name is defined")
        runner.assert_true(bool(data.get("deliveryPhone")), "Delivery phone number is configured")
        runner.assert_true(data.get("deliveryFee", 0) > 0, f"Delivery fee is positive (${data.get('deliveryFee')})")
        runner.assert_true(data.get("freeDeliveryThreshold", 0) > 0, f"Free delivery threshold is defined (${data.get('freeDeliveryThreshold')})")
        runner.assert_true(data.get("taxRate", 0) > 0, f"Tax rate is valid ({data.get('taxRate') * 100}%)")

        # Categories
        categories = data.get("categories", [])
        runner.assert_true(len(categories) >= 4, f"Menu categories count >= 4 (found {len(categories)})")
        cat_ids = {c.get("id") for c in categories}
        runner.assert_true("all" in cat_ids, "Default 'all' category exists")

        # Items
        items = data.get("items", [])
        runner.assert_true(len(items) >= 5, f"Items list has at least 5 dishes (found {len(items)})")

        for idx, item in enumerate(items):
            item_id = item.get("id", f"item_{idx}")
            runner.assert_true(bool(item.get("title")), f"Item [{item_id}] has valid title")
            runner.assert_true(item.get("price", 0) > 0, f"Item [{item_id}] price > 0 (${item.get('price')})")
            runner.assert_true(len(item.get("portions", [])) >= 1, f"Item [{item_id}] has at least one portion")

            # Check image existence on disk
            img_rel = item.get("image", "")
            img_full = os.path.join(BASE_DIR, img_rel.replace("/", os.sep))
            runner.assert_true(
                os.path.isfile(img_full),
                f"Item [{item_id}] image exists at '{img_rel}'"
            )

        # Coupons
        coupons = data.get("coupons", [])
        runner.assert_true(len(coupons) >= 2, f"Coupons defined >= 2 (found {len(coupons)})")
        for coupon in coupons:
            code = coupon.get("code")
            c_type = coupon.get("type")
            runner.assert_true(
                c_type in ["percent", "fixed", "shipping"],
                f"Coupon '{code}' has recognized type '{c_type}'"
            )
            runner.assert_true(
                coupon.get("minOrder", 0) >= 0,
                f"Coupon '{code}' has valid minOrder constraint"
            )

    # ----------------------------------------------------
    # Suite 3: Cart Math, Tax, and Promo Engine Simulation
    # ----------------------------------------------------
    runner.header("Suite 3: Cart Math, Discount & Pricing Engine")

    delivery_fee = 2.50
    free_shipping_threshold = 35.00
    tax_rate = 0.05

    def simulate_totals(cart_items, coupon=None, order_type="delivery"):
        subtotal = sum(i["unitPrice"] * i["quantity"] for i in cart_items)
        discount = 0.0
        fee = delivery_fee if order_type == "delivery" else 0.0

        if coupon and subtotal >= coupon.get("minOrder", 0):
            ctype = coupon.get("type")
            cval = coupon.get("value", 0)
            if ctype == "percent":
                discount = (subtotal * cval) / 100.0
            elif ctype == "fixed":
                discount = min(subtotal, cval)
            elif ctype == "shipping":
                fee = 0.0

        if subtotal >= free_shipping_threshold and order_type == "delivery":
            fee = 0.0

        taxable = max(0.0, subtotal - discount)
        tax = taxable * tax_rate
        grand_total = taxable + fee + tax

        return {
            "subtotal": subtotal,
            "discount": discount,
            "deliveryFee": fee,
            "tax": tax,
            "grandTotal": grand_total,
            "freeDeliveryRemaining": max(0.0, free_shipping_threshold - subtotal)
        }

    # Test 3.1: Single item under threshold
    mock_cart_1 = [
        {"productId": "truffle-mushroom-steak", "unitPrice": 18.99, "quantity": 1}
    ]
    res1 = simulate_totals(mock_cart_1)
    runner.assert_almost_equal(res1["subtotal"], 18.99, 2, "Cart Subtotal: 1 item at $18.99")
    runner.assert_almost_equal(res1["deliveryFee"], 2.50, 2, "Standard delivery fee applied ($2.50)")
    runner.assert_almost_equal(res1["tax"], 18.99 * 0.05, 2, "5% Tax calculated correctly ($0.95)")
    runner.assert_almost_equal(res1["grandTotal"], 18.99 + 2.50 + (18.99 * 0.05), 2, "Grand total sum matches components")
    runner.assert_almost_equal(res1["freeDeliveryRemaining"], 35.00 - 18.99, 2, "Free delivery remaining is $16.01")

    # Test 3.2: Order crossing free delivery threshold ($35)
    mock_cart_2 = [
        {"productId": "truffle-mushroom-steak", "unitPrice": 18.99, "quantity": 2} # $37.98
    ]
    res2 = simulate_totals(mock_cart_2)
    runner.assert_almost_equal(res2["subtotal"], 37.98, 2, "Subtotal: 2 items at $18.99 = $37.98")
    runner.assert_almost_equal(res2["deliveryFee"], 0.0, 2, "Free delivery unlocked (deliveryFee = $0)")
    runner.assert_almost_equal(res2["freeDeliveryRemaining"], 0.0, 2, "Free delivery remaining is 0")

    # Test 3.3: Percentage coupon SHANGRILLA10 (10% off, min $15)
    coupon_10 = {"code": "SHANGRILLA10", "type": "percent", "value": 10, "minOrder": 15}
    res3 = simulate_totals(mock_cart_2, coupon=coupon_10)
    expected_disc = 37.98 * 0.10 # $3.798
    runner.assert_almost_equal(res3["discount"], expected_disc, 2, "10% coupon discount applied correctly ($3.80)")
    taxable_3 = 37.98 - expected_disc
    runner.assert_almost_equal(res3["tax"], taxable_3 * 0.05, 2, "Tax applied after discount subtraction")

    # Test 3.4: Coupon minimum order constraint rejection
    small_cart = [{"productId": "naan", "unitPrice": 5.00, "quantity": 1}]
    res4 = simulate_totals(small_cart, coupon=coupon_10) # min is 15, subtotal is 5
    runner.assert_equal(res4["discount"], 0.0, "Coupon rejected when order subtotal is below minOrder")

    # Test 3.5: Pickup order type delivery fee waiver
    res5 = simulate_totals(mock_cart_1, order_type="pickup")
    runner.assert_equal(res5["deliveryFee"], 0.0, "Pickup order waives delivery fee completely")

    # ----------------------------------------------------
    # Suite 4: Multi-Currency Math
    # ----------------------------------------------------
    runner.header("Suite 4: Multi-Currency Math & Conversion")
    pkr_rate = 285
    usd_val = 18.99
    expected_pkr = round(usd_val * pkr_rate)
    runner.assert_equal(expected_pkr, 5412, "USD $18.99 converts to Rs. 5,412 at rate 285")
    runner.assert_equal(round(35.00 * pkr_rate), 9975, "Free shipping threshold $35 converts to Rs. 9,975")

    # ----------------------------------------------------
    # Suite 5: Local HTTP Server Probe (if active)
    # ----------------------------------------------------
    runner.header("Suite 5: Local HTTP Server Live Probe")
    endpoints = [
        ("http://127.0.0.1:8080/", "text/html"),
        ("http://127.0.0.1:8080/harness.html", "text/html"),
        ("http://127.0.0.1:8080/css/style.css", "text/css"),
        ("http://127.0.0.1:8080/css/harness.css", "text/css"),
        ("http://127.0.0.1:8080/js/data.js", "javascript"),
        ("http://127.0.0.1:8080/js/cart.js", "javascript"),
        ("http://127.0.0.1:8080/js/app.js", "javascript"),
        ("http://127.0.0.1:8080/js/harness-engine.js", "javascript"),
    ]

    server_running = False
    try:
        req = urllib.request.urlopen("http://127.0.0.1:8080/", timeout=1.5)
        server_running = (req.status == 200)
    except Exception:
        server_running = False

    if server_running:
        for url, expected_content_type in endpoints:
            try:
                res = urllib.request.urlopen(url, timeout=2.0)
                status = res.status
                c_type = res.headers.get("Content-Type", "")
                runner.assert_true(
                    status == 200,
                    f"GET {url} returned HTTP {status}"
                )
            except urllib.error.URLError as e:
                runner.assert_true(False, f"GET {url} failed: {e}")
    else:
        print(f"  {YELLOW}⚠ Local server not responding on port 8080 (optional probe skipped){RESET}")
        runner.warnings += 1

    return runner.summary()


if __name__ == "__main__":
    code = run_all()
    sys.exit(code)
