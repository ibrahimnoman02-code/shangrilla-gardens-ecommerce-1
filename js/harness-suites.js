/**
 * Shangrilla Gardens & BBQ - Test Suites Specification
 * Comprehensive BDD automated test batteries covering data schema, cart logic,
 * coupons, tax & shipping math, PKR price formatting, persistence, accessibility, and asset availability.
 */

(function () {
  'use strict';

  // ------------------------------------------------------------------
  // Suite 1: Menu & Restaurant Schema Integrity
  // ------------------------------------------------------------------
  describe('Suite 1: Data Model & Schema Validation', () => {
    it('RESTAURANT_DATA root object is defined', () => {
      expect(typeof RESTAURANT_DATA).toBe('object');
      expect(RESTAURANT_DATA).not.toBeNull();
    });

    it('Restaurant branding & contact details are configured', () => {
      expect(RESTAURANT_DATA.name).toContain('Shangrilla');
      expect(typeof RESTAURANT_DATA.deliveryPhone).toBe('string');
      expect(RESTAURANT_DATA.deliveryPhone.length).toBeGreaterThan(5);
      expect(typeof RESTAURANT_DATA.address).toBe('string');
    });

    it('Pricing constants are valid positive values', () => {
      expect(RESTAURANT_DATA.deliveryFee).toBe(713);
      expect(RESTAURANT_DATA.freeDeliveryThreshold).toBe(9975);
      expect(RESTAURANT_DATA.taxRate).toBeCloseTo(0.05, 0.001);
    });

    it('Categories list contains all required culinary categories', () => {
      expect(Array.isArray(RESTAURANT_DATA.categories)).toBe(true);
      expect(RESTAURANT_DATA.categories.length).toBeGreaterThan(4);
      const catIds = RESTAURANT_DATA.categories.map(c => c.id);
      expect(catIds).toContain('all');
      expect(catIds).toContain('steaks');
      expect(catIds).toContain('handi');
      expect(catIds).toContain('naans');
      expect(catIds).toContain('bbq');
      expect(catIds).toContain('beverages');
    });

    it('All dishes have valid IDs, prices, portions and image paths', () => {
      expect(Array.isArray(RESTAURANT_DATA.items)).toBe(true);
      expect(RESTAURANT_DATA.items.length).toBeGreaterThan(5);

      RESTAURANT_DATA.items.forEach(dish => {
        expect(typeof dish.id).toBe('string');
        expect(dish.id.length).toBeGreaterThan(2);
        expect(typeof dish.title).toBe('string');
        expect(dish.price).toBeGreaterThan(0);
        expect(Array.isArray(dish.portions)).toBe(true);
        expect(dish.portions.length).toBeGreaterThan(0);
        expect(typeof dish.image).toBe('string');
      });
    });

    it('Coupons are configured with recognized types and valid thresholds', () => {
      expect(Array.isArray(RESTAURANT_DATA.coupons)).toBe(true);
      expect(RESTAURANT_DATA.coupons.length).toBeGreaterThan(1);

      RESTAURANT_DATA.coupons.forEach(coupon => {
        expect(typeof coupon.code).toBe('string');
        expect(['percent', 'fixed', 'shipping']).toContain(coupon.type);
        expect(coupon.minOrder).toBeGreaterThan(-1);
      });
    });
  });

  // ------------------------------------------------------------------
  // Suite 2: CartManager Operations & Variations
  // ------------------------------------------------------------------
  describe('Suite 2: Cart Operations & Item Variations', () => {
    let testCart;

    beforeEach(() => {
      // Clean isolated cart instance using custom test key
      testCart = new CartManager();
      testCart.storageKey = 'shangrilla_test_cart_' + Date.now();
      testCart.couponKey = 'shangrilla_test_coupon_' + Date.now();
      testCart.cart = [];
      testCart.appliedCoupon = null;
    });

    afterEach(() => {
      localStorage.removeItem(testCart.storageKey);
      localStorage.removeItem(testCart.couponKey);
    });

    it('Adds a standard dish with base portion to cart', () => {
      const added = testCart.addItem('truffle-mushroom-steak', 0, [], 'Mild', '', 1);
      expect(added).toBe(true);
      expect(testCart.cart.length).toBe(1);
      expect(testCart.cart[0].productId).toBe('truffle-mushroom-steak');
      expect(testCart.cart[0].unitPrice).toBe(1500);
      expect(testCart.cart[0].quantity).toBe(1);
    });

    it('Calculates portion price delta correctly (Double Fillet +Rs. 600)', () => {
      testCart.addItem('truffle-mushroom-steak', 1, [], 'Normal', '', 1);
      const expectedPrice = 1500 + 600; // Rs. 2,100
      expect(testCart.cart[0].unitPrice).toBe(expectedPrice);
    });

    it('Calculates add-on prices and accumulates them in item unit price', () => {
      // Add extra sauce (Rs. 220) and sauteed mushrooms (Rs. 250)
      const addons = ['Extra Creamy Truffle Mushroom Sauce', 'Garlic Butter Sautéed Mushrooms'];
      testCart.addItem('truffle-mushroom-steak', 0, addons, 'Normal', '', 1);
      const expectedUnitPrice = 1500 + 220 + 250; // Rs. 1,970
      expect(testCart.cart[0].unitPrice).toBe(expectedUnitPrice);
      expect(testCart.cart[0].addons.length).toBe(2);
    });

    it('Distinct variations create separate line items', () => {
      testCart.addItem('truffle-mushroom-steak', 0, [], 'Mild', '', 1);
      testCart.addItem('truffle-mushroom-steak', 0, [], 'Spicy', '', 1);
      expect(testCart.cart.length).toBe(2);
    });

    it('Identical variations increment quantity instead of duplicate line items', () => {
      testCart.addItem('truffle-mushroom-steak', 0, [], 'Normal', '', 1);
      testCart.addItem('truffle-mushroom-steak', 0, [], 'Normal', '', 2);
      expect(testCart.cart.length).toBe(1);
      expect(testCart.cart[0].quantity).toBe(3);
    });

    it('updateQuantity modifies quantity and removes item when count reaches 0', () => {
      testCart.addItem('truffle-mushroom-steak', 0, [], 'Normal', '', 2);
      const itemId = testCart.cart[0].id;

      testCart.updateQuantity(itemId, 1);
      expect(testCart.cart[0].quantity).toBe(3);

      testCart.updateQuantity(itemId, -3);
      expect(testCart.cart.length).toBe(0);
    });

    it('removeItem deletes specific cart entry', () => {
      testCart.addItem('truffle-mushroom-steak', 0, [], 'Normal', '', 1);
      testCart.addItem('handi-chicken-hari-mirch', 0, [], 'Normal', '', 1);
      expect(testCart.cart.length).toBe(2);

      const firstId = testCart.cart[0].id;
      testCart.removeItem(firstId);
      expect(testCart.cart.length).toBe(1);
      expect(testCart.cart[0].productId).toBe('handi-chicken-hari-mirch');
    });

    it('clearCart resets all cart items and applied coupon', () => {
      testCart.addItem('truffle-mushroom-steak', 0, [], 'Normal', '', 1);
      testCart.appliedCoupon = { code: 'TEST' };
      testCart.clearCart();
      expect(testCart.cart.length).toBe(0);
      expect(testCart.appliedCoupon).toBeNull();
    });
  });

  // ------------------------------------------------------------------
  // Suite 3: Promotions & Coupon Engine
  // ------------------------------------------------------------------
  describe('Suite 3: Coupons & Promotional Logic', () => {
    let testCart;

    beforeEach(() => {
      testCart = new CartManager();
      testCart.storageKey = 'shangrilla_test_cart_promo';
      testCart.couponKey = 'shangrilla_test_coupon_promo';
      testCart.cart = [];
      testCart.appliedCoupon = null;
    });

    afterEach(() => {
      localStorage.removeItem(testCart.storageKey);
      localStorage.removeItem(testCart.couponKey);
    });

    it('Rejects invalid or non-existent promo codes', () => {
      const res = testCart.applyCoupon('INVALID_CODE_123');
      expect(res.success).toBe(false);
      expect(res.message).toContain('Invalid');
    });

    it('Rejects promo code when order subtotal is below minOrder requirement', () => {
      // Add individual naan (Rs. 100) while SHANGRILLA10 requires minOrder Rs. 4,275
      testCart.addItem('individual-roghani-naan', 0, [], 'Normal', '', 1);
      const res = testCart.applyCoupon('SHANGRILLA10');
      expect(res.success).toBe(false);
      expect(res.message).toContain('subtotal must be at least');
    });

    it('Applies SHANGRILLA10 (10% off) when subtotal requirement is met', () => {
      testCart.addItem('truffle-mushroom-steak', 0, [], 'Normal', '', 3); // Rs. 4,500 >= 4,275
      const res = testCart.applyCoupon('SHANGRILLA10');
      expect(res.success).toBe(true);
      expect(testCart.appliedCoupon.code).toBe('SHANGRILLA10');

      const totals = testCart.calculateTotals('delivery');
      const expectedDiscount = (4500 * 10) / 100;
      expect(totals.discount).toBe(expectedDiscount);
    });

    it('Applies ROYALSTEAK (Rs. 1,425 fixed discount) correctly', () => {
      testCart.addItem('truffle-mushroom-steak', 0, [], 'Normal', '', 5); // Rs. 7,500 >= 7,125
      const res = testCart.applyCoupon('ROYALSTEAK');
      expect(res.success).toBe(true);

      const totals = testCart.calculateTotals('delivery');
      expect(totals.discount).toBe(1425);
    });

    it('Applies FREESHIP coupon to waive delivery fee on eligible orders', () => {
      testCart.addItem('handi-chicken-hari-mirch', 0, [], 'Normal', '', 3); // Rs. 6,105 (under Rs. 9,975 threshold, but >= 5,700)
      const res = testCart.applyCoupon('FREESHIP');
      expect(res.success).toBe(true);

      const totals = testCart.calculateTotals('delivery');
      expect(totals.deliveryFee).toBe(0);
    });

    it('removeCoupon clears active coupon and restores normal totals', () => {
      testCart.addItem('truffle-mushroom-steak', 0, [], 'Normal', '', 3); // Rs. 4,500 >= 4,275
      testCart.applyCoupon('SHANGRILLA10');
      expect(testCart.appliedCoupon).not.toBeNull();

      testCart.removeCoupon();
      expect(testCart.appliedCoupon).toBeNull();
      const totals = testCart.calculateTotals('delivery');
      expect(totals.discount).toBe(0);
    });
  });

  // ------------------------------------------------------------------
  // Suite 4: Taxes, Shipping & Grand Total Math
  // ------------------------------------------------------------------
  describe('Suite 4: Tax & Shipping Math Engine', () => {
    let testCart;

    beforeEach(() => {
      testCart = new CartManager();
      testCart.storageKey = 'shangrilla_test_cart_math';
      testCart.cart = [];
    });

    it('Applies standard Rs. 713 delivery fee when subtotal is below Rs. 9,975', () => {
      testCart.addItem('truffle-mushroom-steak', 0, [], 'Normal', '', 1); // Rs. 1,500
      const totals = testCart.calculateTotals('delivery');
      expect(totals.subtotal).toBe(1500);
      expect(totals.deliveryFee).toBe(713);
      expect(totals.freeDeliveryRemaining).toBe(8475);
    });

    it('Unlocks free delivery when subtotal meets or exceeds Rs. 9,975', () => {
      testCart.addItem('truffle-mushroom-steak', 0, [], 'Normal', '', 7); // Rs. 10,500
      const totals = testCart.calculateTotals('delivery');
      expect(totals.subtotal).toBe(10500);
      expect(totals.deliveryFee).toBe(0);
      expect(totals.freeDeliveryRemaining).toBe(0);
    });

    it('Waives delivery fee for pickup orders regardless of subtotal', () => {
      testCart.addItem('individual-roghani-naan', 0, [], 'Normal', '', 1); // Rs. 100
      const totals = testCart.calculateTotals('pickup');
      expect(totals.deliveryFee).toBe(0);
    });

    it('Computes tax at exactly 5% on taxable amount after discount', () => {
      testCart.addItem('truffle-mushroom-steak', 0, [], 'Normal', '', 7); // Rs. 10,500
      testCart.appliedCoupon = { code: 'TEST', type: 'fixed', value: 500, minOrder: 1000 };
      const totals = testCart.calculateTotals('delivery');
      const taxable = 10500 - 500; // Rs. 10,000
      const expectedTax = taxable * 0.05; // Rs. 500
      expect(totals.tax).toBe(expectedTax);
      expect(totals.grandTotal).toBe(taxable + 0 + expectedTax);
    });
  });

  // ------------------------------------------------------------------
  // Suite 5: PKR Price Formatter
  // ------------------------------------------------------------------
  describe('Suite 5: PKR Price Formatter', () => {
    let testCart;

    beforeEach(() => {
      testCart = new CartManager();
    });

    it('Formats prices with Rs. prefix and thousands separators', () => {
      expect(testCart.formatPrice(5412)).toBe('Rs. 5,412');
      expect(testCart.formatPrice(0)).toBe('Rs. 0');
    });

    it('Rounds fractional rupee amounts (e.g. tax) to whole rupees', () => {
      expect(testCart.formatPrice(270.6)).toBe('Rs. 271');
    });
  });

  // ------------------------------------------------------------------
  // Suite 6: LocalStorage Resilience
  // ------------------------------------------------------------------
  describe('Suite 6: LocalStorage Resilience & Order Archival', () => {
    let testCart;

    beforeEach(() => {
      testCart = new CartManager();
      testCart.storageKey = 'shangrilla_resilience_test';
      testCart.orderHistoryKey = 'shangrilla_orders_resilience_test';
    });

    afterEach(() => {
      localStorage.removeItem(testCart.storageKey);
      localStorage.removeItem(testCart.orderHistoryKey);
    });

    it('Gracefully handles corrupt or non-JSON data in localStorage', () => {
      localStorage.setItem(testCart.storageKey, '<<<CORRUPT_JSON_DATA>>>');
      const loaded = testCart.loadCart();
      expect(Array.isArray(loaded)).toBe(true);
      expect(loaded.length).toBe(0);
    });

    it('Stores and retrieves completed customer orders in order history', () => {
      const mockOrder = {
        orderId: 'SG-TEST-999',
        customer: { name: 'John Doe', phone: '03001234567' },
        grandTotal: 'Rs. 12,113',
        timestamp: new Date().toISOString()
      };

      testCart.saveOrder(mockOrder);
      const history = testCart.getOrderHistory();
      expect(history.length).toBeGreaterThan(0);
      expect(history[0].orderId).toBe('SG-TEST-999');
    });
  });

  // ------------------------------------------------------------------
  // Suite 7: Accessibility & Semantic DOM
  // ------------------------------------------------------------------
  describe('Suite 7: DOM Structure & Accessibility Standards', () => {
    it('Ensures crucial interactive modals contain accessibility attributes', () => {
      const trackerModal = document.getElementById('orderTrackerModal');
      if (trackerModal) {
        expect(trackerModal.getAttribute('role')).toBe('dialog');
        expect(trackerModal.getAttribute('aria-modal')).toBe('true');
      }
    });

    it('Verifies toast notification region has aria-live="polite"', () => {
      const toastRegion = document.getElementById('toastContainer');
      if (toastRegion) {
        expect(toastRegion.getAttribute('aria-live')).toBe('polite');
      }
    });
  });

  // ------------------------------------------------------------------
  // Suite 8: Asynchronous Dish Image Asset Reachability
  // ------------------------------------------------------------------
  describe('Suite 8: Asynchronous Dish Image Reachability', () => {
    it('All dish poster images load with HTTP 200', async () => {
      const checkPromises = RESTAURANT_DATA.items.map(dish => {
        return fetch(dish.image, { method: 'HEAD' })
          .then(res => {
            if (!res.ok) {
              throw new Error(`Image '${dish.image}' for dish '${dish.id}' failed with status ${res.status}`);
            }
            return true;
          });
      });

      const results = await Promise.all(checkPromises);
      expect(results.length).toBe(RESTAURANT_DATA.items.length);
    });
  });

})();
