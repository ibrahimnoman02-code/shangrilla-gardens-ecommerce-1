// Application Logic for Shangrilla Gardens & BBQ
document.addEventListener('DOMContentLoaded', () => {
  // State variables
  let currentCategory = 'all';
  let searchQuery = '';
  let currentSort = 'featured';
  let activeProductForModal = null;

  // DOM Elements
  const siteHeader = document.getElementById('siteHeader');
  const mainNav = document.getElementById('mainNav');
  const navToggle = document.getElementById('navToggle');
  const categoryTabsContainer = document.getElementById('categoryTabs');
  const menuGrid = document.getElementById('menuGrid');
  const searchInput = document.getElementById('menuSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const sortSelect = document.getElementById('sortSelect');
  const cartBtn = document.getElementById('cartBtn');
  const cartBadge = document.getElementById('cartBadge');
  const cartOverlay = document.getElementById('cartOverlay');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const cartDiscountEl = document.getElementById('cartDiscount');
  const cartDiscountRow = document.getElementById('cartDiscountRow');
  const cartDeliveryEl = document.getElementById('cartDelivery');
  const cartTaxEl = document.getElementById('cartTax');
  const cartTotalEl = document.getElementById('cartTotal');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const couponInput = document.getElementById('couponInput');
  const applyCouponBtn = document.getElementById('applyCouponBtn');
  const appliedCouponContainer = document.getElementById('appliedCouponContainer');
  const freeShippingBar = document.getElementById('freeShippingBar');
  const freeShippingText = document.getElementById('freeShippingText');
  const freeShippingFill = document.getElementById('freeShippingFill');

  // Modals
  const customizerModal = document.getElementById('customizerModal');
  const closeCustomizerBtn = document.getElementById('closeCustomizerBtn');
  const checkoutModal = document.getElementById('checkoutModal');
  const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
  const orderTrackerModal = document.getElementById('orderTrackerModal');
  const closeTrackerBtn = document.getElementById('closeTrackerBtn');

  const formatPrice = (amount) => window.cartManager.formatPrice(amount);

  // Escape user-provided text before inserting it into HTML
  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[ch]));
  }

  // Static prices shown outside the menu grid
  function renderStaticPrices() {
    const heroPriceEl = document.querySelector('.poster-price .amount');
    const steak = RESTAURANT_DATA.items.find(i => i.id === 'truffle-mushroom-steak');
    if (heroPriceEl && steak) heroPriceEl.textContent = formatPrice(steak.price);

    const threshold = document.getElementById('freeDeliveryBannerThreshold');
    if (threshold) threshold.textContent = formatPrice(RESTAURANT_DATA.freeDeliveryThreshold);
  }

  // Initialize
  initCategories();
  renderStaticPrices();
  renderMenu();
  updateCartUI();
  setupHeader();
  setupEventListeners();
  setMinReservationDate();
  setupWhatsAppWidget();

  // -------------------------------------------------------------
  // WhatsApp: every message (quick chat, orders, reservations)
  // goes to the restaurant number below (0307-8882936).
  // wa.me needs the international format without "+" or the leading 0.
  // -------------------------------------------------------------
  const WHATSAPP_NUMBER = '923078882936';

  function openWhatsApp(message) {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    const win = window.open(url, '_blank');
    if (win) {
      try { win.opener = null; } catch (e) { /* cross-origin already */ }
    } else {
      // Pop-up blocked: open WhatsApp in this tab instead so nothing is lost
      window.location.href = url;
    }
  }

  function setupWhatsAppWidget() {
    const widget = document.getElementById('waChatWidget');
    const toggleBtn = document.getElementById('floatingWhatsAppBtn');
    const form = document.getElementById('waChatForm');
    const input = document.getElementById('waChatInput');
    if (!widget || !toggleBtn || !form || !input) return;

    const autoGrow = () => {
      input.style.height = 'auto';
      input.style.height = `${Math.min(Math.max(input.scrollHeight, 44), 110)}px`;
    };

    const setOpen = (open) => {
      widget.classList.toggle('open', open);
      toggleBtn.setAttribute('aria-expanded', String(open));
      toggleBtn.setAttribute('aria-label', open ? 'Close WhatsApp chat' : 'Chat on WhatsApp');
      if (open) requestAnimationFrame(() => input.focus());
    };

    window.isWhatsAppWidgetOpen = () => widget.classList.contains('open');
    window.closeWhatsAppWidget = () => setOpen(false);

    toggleBtn.addEventListener('click', () => setOpen(!widget.classList.contains('open')));
    input.addEventListener('input', autoGrow);

    // Enter sends, Shift+Enter adds a new line
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
        e.preventDefault();
        form.requestSubmit();
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) {
        form.classList.remove('wa-shake');
        void form.offsetWidth; // restart the animation
        form.classList.add('wa-shake');
        input.focus();
        return;
      }
      openWhatsApp(text);
      input.value = '';
      autoGrow();
      setOpen(false);
    });
    form.addEventListener('animationend', () => form.classList.remove('wa-shake'));

    // Clicking anywhere else collapses the box (typed text is kept)
    document.addEventListener('click', (e) => {
      if (widget.classList.contains('open') && !widget.contains(e.target)) setOpen(false);
    });
  }

  // -------------------------------------------------------------
  // Header: mobile menu, scroll state & active section highlighting
  // -------------------------------------------------------------
  function setupHeader() {
    const setNavOpen = (open) => {
      document.body.classList.toggle('nav-open', open);
      if (navToggle) {
        navToggle.setAttribute('aria-expanded', String(open));
        navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      }
    };
    window.closeMobileNav = () => setNavOpen(false);

    if (navToggle) {
      navToggle.addEventListener('click', () => {
        setNavOpen(!document.body.classList.contains('nav-open'));
      });
    }

    if (mainNav) {
      mainNav.addEventListener('click', (e) => {
        if (e.target.closest('a')) setNavOpen(false);
      });
    }

    document.addEventListener('click', (e) => {
      if (document.body.classList.contains('nav-open') && siteHeader && !siteHeader.contains(e.target)) {
        setNavOpen(false);
      }
    });

    window.matchMedia('(min-width: 1025px)').addEventListener('change', (e) => {
      if (e.matches) setNavOpen(false);
    });

    // Shadow under the header once the page scrolls
    if (siteHeader) {
      let ticking = false;
      const updateScrolled = () => {
        siteHeader.classList.toggle('scrolled', window.scrollY > 8);
        ticking = false;
      };
      window.addEventListener('scroll', () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(updateScrolled);
        }
      }, { passive: true });
      updateScrolled();
    }

    // Highlight the nav link of the section currently in view
    const links = [...document.querySelectorAll('.nav-links .nav-link')];
    const sections = links
      .map(link => document.querySelector(link.getAttribute('href')))
      .filter(Boolean);

    if ('IntersectionObserver' in window && sections.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const id = '#' + entry.target.id;
          links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === id));
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      sections.forEach(section => observer.observe(section));
    }
  }

  // -------------------------------------------------------------
  // Categories & Filtering
  // -------------------------------------------------------------
  function initCategories() {
    if (!categoryTabsContainer) return;
    categoryTabsContainer.innerHTML = RESTAURANT_DATA.categories.map(cat => `
      <button type="button" class="category-tab-btn ${cat.id === currentCategory ? 'active' : ''}" data-category="${cat.id}">
        <i class="fa-solid ${cat.icon}" aria-hidden="true"></i>
        <span>${cat.name}</span>
      </button>
    `).join('');

    categoryTabsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.category-tab-btn');
      if (!btn) return;
      categoryTabsContainer.querySelectorAll('.category-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      currentCategory = btn.dataset.category;
      renderMenu();
    });

    setupCategoryScroller();
  }

  // Desktop has no swipe, so give the category strip arrow buttons and
  // let the mouse wheel scroll it sideways (phones keep native swiping).
  function setupCategoryScroller() {
    const wrap = document.getElementById('categoryTabsWrap');
    const prevBtn = document.getElementById('categoryScrollPrev');
    const nextBtn = document.getElementById('categoryScrollNext');
    const strip = categoryTabsContainer;
    if (!wrap || !strip) return;

    const updateArrows = () => {
      const maxScroll = strip.scrollWidth - strip.clientWidth;
      wrap.classList.toggle('can-scroll-left', strip.scrollLeft > 2);
      wrap.classList.toggle('can-scroll-right', strip.scrollLeft < maxScroll - 2);
    };

    const scrollByPage = (dir) => {
      strip.scrollBy({ left: dir * strip.clientWidth * 0.7, behavior: 'smooth' });
    };

    if (prevBtn) prevBtn.addEventListener('click', () => scrollByPage(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => scrollByPage(1));

    // Vertical wheel -> horizontal scroll, but release the page at either end
    strip.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return; // trackpad sideways swipe already works
      const maxScroll = strip.scrollWidth - strip.clientWidth;
      if (maxScroll <= 0) return;
      const atStart = strip.scrollLeft <= 0 && e.deltaY < 0;
      const atEnd = strip.scrollLeft >= maxScroll - 1 && e.deltaY > 0;
      if (atStart || atEnd) return;
      e.preventDefault();
      strip.scrollLeft += e.deltaY;
    }, { passive: false });

    strip.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    window.addEventListener('load', updateArrows); // tab widths change once web fonts arrive
    updateArrows();
  }

  function getFilteredItems() {
    const query = searchQuery.trim().toLowerCase();
    return RESTAURANT_DATA.items.filter(item => {
      const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
      const matchesSearch = !query ||
        item.title.toLowerCase().includes(query) ||
        item.subtitle.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (currentSort === 'price-low') return a.price - b.price;
      if (currentSort === 'price-high') return b.price - a.price;
      if (currentSort === 'rating') return b.rating - a.rating;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0); // Featured default
    });
  }

  function renderMenu() {
    if (!menuGrid) return;
    const items = getFilteredItems();

    if (items.length === 0) {
      menuGrid.innerHTML = `
        <div class="menu-empty">
          <i class="fa-solid fa-plate-wheat"></i>
          <h3>No culinary delights found</h3>
          <p>Try refining your search term or selecting another category.</p>
        </div>
      `;
      return;
    }

    menuGrid.innerHTML = items.map(item => `
      <article class="food-card" data-id="${item.id}">
        <div class="card-media" onclick="window.openCustomizer('${item.id}')">
          <img src="${item.image}" alt="${escapeHtml(item.title)}" width="480" height="330" loading="lazy" decoding="async" />
          ${item.badge ? `<span class="card-badge">${item.badge}</span>` : ''}
          <div class="card-rating-pill">
            <i class="fa-solid fa-star"></i>
            <span>${item.rating}</span>
          </div>
        </div>
        <div class="card-body">
          <span class="card-subtitle">${item.subtitle}</span>
          <h3 class="card-title" onclick="window.openCustomizer('${item.id}')">${item.title}</h3>
          <p class="card-desc">${item.description}</p>
          <div class="card-dietary-tags">
            ${item.dietary.map(d => `<span class="dietary-tag">${d}</span>`).join('')}
            <span class="dietary-tag"><i class="fa-solid fa-pepper-hot"></i> ${item.spiceLevel}</span>
          </div>
          <div class="card-footer">
            <div class="card-price">
              <span class="price-val">${formatPrice(item.price)}</span>
            </div>
            <div class="card-actions">
              <button type="button" class="btn-card-view" title="Custom Options" aria-label="Customize ${escapeHtml(item.title)}" onclick="window.openCustomizer('${item.id}')">
                <i class="fa-solid fa-sliders"></i>
              </button>
              <button type="button" class="btn-card-order" onclick="window.quickAddToCart('${item.id}')">
                <i class="fa-solid fa-plus"></i>
                <span>Order</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `).join('');
  }

  // -------------------------------------------------------------
  // Quick Add & Customizer Modal
  // -------------------------------------------------------------
  window.quickAddToCart = function(productId) {
    const product = RESTAURANT_DATA.items.find(i => i.id === productId);
    if (!product) return;

    window.cartManager.addItem(productId, 0, [], "Normal", "", 1);
    showToast(`Added "${product.title}" to your feast!`, 'success');
  };

  window.openCustomizer = function(productId) {
    const product = RESTAURANT_DATA.items.find(i => i.id === productId);
    if (!product) return;
    activeProductForModal = product;

    document.getElementById('modalProductImg').src = product.image;
    document.getElementById('modalProductImg').alt = product.title;
    document.getElementById('modalProductTitle').textContent = product.title;
    document.getElementById('modalProductSubtitle').textContent = product.subtitle;
    document.getElementById('modalProductDesc').textContent = product.description;

    // Portion options
    const portionsContainer = document.getElementById('modalPortions');
    portionsContainer.innerHTML = product.portions.map((portion, idx) => `
      <label class="option-label-card ${idx === 0 ? 'selected' : ''}">
        <div>
          <input type="radio" name="portionOption" value="${idx}" ${idx === 0 ? 'checked' : ''} onchange="window.recalcModalPrice()" />
          <strong>${escapeHtml(portion.name)}</strong>
        </div>
        <span>${portion.priceDelta > 0 ? `+${formatPrice(portion.priceDelta)}` : portion.priceDelta < 0 ? formatPrice(product.price + portion.priceDelta) : 'Standard'}</span>
      </label>
    `).join('');

    // Addons
    const addonsContainer = document.getElementById('modalAddons');
    if (product.addons && product.addons.length > 0) {
      document.getElementById('addonsGroup').style.display = 'block';
      addonsContainer.innerHTML = product.addons.map(addon => `
        <label class="option-label-card">
          <div>
            <input type="checkbox" name="addonOption" value="${escapeHtml(addon.name)}" data-price="${addon.price}" onchange="window.recalcModalPrice()" />
            <span>${escapeHtml(addon.name)}</span>
          </div>
          <span class="price">+${formatPrice(addon.price)}</span>
        </label>
      `).join('');
    } else {
      document.getElementById('addonsGroup').style.display = 'none';
      addonsContainer.innerHTML = '';
    }

    // Reset spice, qty & notes
    const defaultSpice = document.querySelector('input[name="spiceOption"]');
    if (defaultSpice) defaultSpice.checked = true;
    document.getElementById('modalQty').textContent = "1";
    document.getElementById('modalInstructions').value = "";

    window.recalcModalPrice();
    customizerModal.classList.add('open');
  };

  window.recalcModalPrice = function() {
    if (!activeProductForModal) return;

    const portionIdx = parseInt(document.querySelector('input[name="portionOption"]:checked')?.value || 0);
    const portion = activeProductForModal.portions[portionIdx] || activeProductForModal.portions[0];
    let basePrice = activeProductForModal.price + (portion.priceDelta || 0);

    // Selected addons
    let addonsTotal = 0;
    document.querySelectorAll('input[name="addonOption"]:checked').forEach(cb => {
      addonsTotal += parseFloat(cb.dataset.price || 0);
    });

    const qty = parseInt(document.getElementById('modalQty').textContent || 1);
    const total = (basePrice + addonsTotal) * qty;

    document.getElementById('modalFinalPrice').textContent = formatPrice(total);

    // Style selections (portion, spice and add-on cards)
    customizerModal.querySelectorAll('.option-label-card').forEach(card => {
      const input = card.querySelector('input');
      card.classList.toggle('selected', Boolean(input && input.checked));
    });
  };

  window.adjustModalQty = function(delta) {
    const qtyEl = document.getElementById('modalQty');
    let cur = parseInt(qtyEl.textContent || 1);
    cur = Math.max(1, cur + delta);
    qtyEl.textContent = cur;
    window.recalcModalPrice();
  };

  window.confirmAddToCartFromModal = function() {
    if (!activeProductForModal) return;

    const portionIdx = parseInt(document.querySelector('input[name="portionOption"]:checked')?.value || 0);
    const selectedAddons = [];
    document.querySelectorAll('input[name="addonOption"]:checked').forEach(cb => {
      selectedAddons.push(cb.value);
    });
    const spiceLevel = document.querySelector('input[name="spiceOption"]:checked')?.value || "Medium Spice";
    const instructions = document.getElementById('modalInstructions').value;
    const qty = parseInt(document.getElementById('modalQty').textContent || 1);

    window.cartManager.addItem(
      activeProductForModal.id,
      portionIdx,
      selectedAddons,
      spiceLevel,
      instructions,
      qty
    );

    customizerModal.classList.remove('open');
    showToast(`Added ${qty}x "${activeProductForModal.title}" to cart!`, 'success');
  };

  // -------------------------------------------------------------
  // Cart Drawer & Calculations
  // -------------------------------------------------------------
  function updateCartUI() {
    const count = window.cartManager.getTotalCount();
    if (cartBadge) {
      cartBadge.textContent = count;
      cartBadge.hidden = count === 0;
    }
    if (cartBtn) cartBtn.setAttribute('aria-label', count > 0 ? `Open cart (${count} items)` : 'Open cart');

    const cart = window.cartManager.cart;
    const totals = window.cartManager.calculateTotals();

    // Render items
    if (cartItemsList) {
      if (cart.length === 0) {
        cartItemsList.innerHTML = `
          <div class="cart-empty-state">
            <i class="fa-solid fa-bag-shopping"></i>
            <h4>Your Feast Bag is Empty</h4>
            <p style="font-size:0.85rem; color: var(--text-dim);">Explore our royal sizzlers, handis, and freshly baked naans to begin.</p>
          </div>
        `;
        if (checkoutBtn) checkoutBtn.disabled = true;
      } else {
        if (checkoutBtn) checkoutBtn.disabled = false;
        cartItemsList.innerHTML = cart.map(item => `
          <div class="cart-item-row" data-id="${item.id}">
            <div class="cart-item-img">
              <img src="${item.image}" alt="${escapeHtml(item.title)}" width="64" height="64" loading="lazy" />
            </div>
            <div class="cart-item-info">
              <h4 class="cart-item-name">${escapeHtml(item.title)}</h4>
              <span class="cart-item-variation">${escapeHtml(item.portionName)} • ${escapeHtml(item.spiceLevel)}</span>
              ${item.addons && item.addons.length > 0 ? `
                <span class="cart-item-addons">+ ${item.addons.map(a => escapeHtml(a.name)).join(', ')}</span>
              ` : ''}
              ${item.instructions ? `<span class="cart-item-note">Note: ${escapeHtml(item.instructions)}</span>` : ''}
              <div class="cart-item-ctrls">
                <button type="button" class="qty-btn" aria-label="Decrease quantity" onclick="window.cartManager.updateQuantity('${item.id}', -1)">-</button>
                <span class="qty-val">${item.quantity}</span>
                <button type="button" class="qty-btn" aria-label="Increase quantity" onclick="window.cartManager.updateQuantity('${item.id}', 1)">+</button>
              </div>
            </div>
            <div class="cart-item-price-side">
              <span class="cart-item-total">${formatPrice(item.unitPrice * item.quantity)}</span>
              <button type="button" class="cart-item-remove" onclick="window.cartManager.removeItem('${item.id}')" title="Remove item" aria-label="Remove item">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        `).join('');
      }
    }

    // Bill totals
    if (cartSubtotalEl) cartSubtotalEl.textContent = formatPrice(totals.subtotal);
    if (cartDeliveryEl) cartDeliveryEl.textContent = totals.deliveryFee === 0 ? "FREE" : formatPrice(totals.deliveryFee);
    if (cartTaxEl) cartTaxEl.textContent = formatPrice(totals.tax);
    if (cartTotalEl) cartTotalEl.textContent = formatPrice(totals.grandTotal);

    // Discount row
    if (cartDiscountRow && cartDiscountEl) {
      if (totals.discount > 0) {
        cartDiscountRow.style.display = 'flex';
        cartDiscountEl.textContent = `-${formatPrice(totals.discount)}`;
      } else {
        cartDiscountRow.style.display = 'none';
      }
    }

    // Free shipping progress bar
    if (freeShippingBar && freeShippingFill && freeShippingText) {
      const threshold = RESTAURANT_DATA.freeDeliveryThreshold;
      const progressPercent = Math.min(100, Math.round((totals.subtotal / threshold) * 100));
      freeShippingFill.style.width = `${progressPercent}%`;

      if (totals.subtotal >= threshold) {
        freeShippingText.innerHTML = `<span><strong>🎉 Congratulations!</strong> You unlocked FREE Delivery!</span><span>100%</span>`;
      } else {
        const remaining = formatPrice(threshold - totals.subtotal);
        freeShippingText.innerHTML = `<span>Add <strong>${remaining}</strong> more for <strong>FREE Delivery</strong></span><span>${progressPercent}%</span>`;
      }
    }

    // Applied coupon pill
    if (appliedCouponContainer) {
      const coupon = window.cartManager.appliedCoupon;
      if (coupon) {
        appliedCouponContainer.innerHTML = `
          <div class="applied-coupon-pill">
            <span><i class="fa-solid fa-tag"></i> <strong>${escapeHtml(coupon.code)}</strong> applied (${escapeHtml(coupon.desc)})</span>
            <button type="button" onclick="window.cartManager.removeCoupon()" aria-label="Remove coupon" style="color:var(--spicy); font-weight:700;">×</button>
          </div>
        `;
      } else {
        appliedCouponContainer.innerHTML = '';
      }
    }
  }

  // -------------------------------------------------------------
  // Checkout & Order Tracking
  // -------------------------------------------------------------
  function getActiveOrderType() {
    const activeTypeBtn = document.querySelector('.checkout-tab-btn.active');
    return activeTypeBtn ? activeTypeBtn.dataset.type : 'delivery';
  }

  window.openCheckout = function() {
    if (window.cartManager.getTotalCount() === 0) {
      showToast("Your cart is empty!", "error");
      return;
    }
    cartOverlay.classList.remove('open');
    window.setCheckoutOrderType(getActiveOrderType());
    checkoutModal.classList.add('open');
  };

  function renderCheckoutSummary(orderType) {
    const totals = window.cartManager.calculateTotals(orderType);
    document.getElementById('checkoutSubtotal').textContent = formatPrice(totals.subtotal);
    document.getElementById('checkoutDelivery').textContent = totals.deliveryFee === 0 ? "FREE" : formatPrice(totals.deliveryFee);
    document.getElementById('checkoutTax').textContent = formatPrice(totals.tax);
    document.getElementById('checkoutTotal').textContent = formatPrice(totals.grandTotal);

    const discountRow = document.getElementById('checkoutDiscountRow');
    if (discountRow) {
      discountRow.style.display = totals.discount > 0 ? 'flex' : 'none';
      document.getElementById('checkoutDiscount').textContent = `-${formatPrice(totals.discount)}`;
    }
  }

  window.setCheckoutOrderType = function(type) {
    document.querySelectorAll('.checkout-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.type === type);
    });

    const addressGroup = document.getElementById('checkoutAddressGroup');
    const tableGroup = document.getElementById('checkoutTableGroup');

    if (type === 'dinein') {
      addressGroup.style.display = 'none';
      tableGroup.style.display = 'block';
    } else if (type === 'pickup') {
      addressGroup.style.display = 'none';
      tableGroup.style.display = 'none';
    } else {
      addressGroup.style.display = 'block';
      tableGroup.style.display = 'none';
    }

    renderCheckoutSummary(type);
  };

  window.selectPaymentMethod = function(cardEl, method) {
    document.querySelectorAll('.payment-card-opt').forEach(el => el.classList.remove('selected'));
    cardEl.classList.add('selected');
    document.getElementById('selectedPaymentMethod').value = method;
  };

  window.submitOrder = function(event) {
    event.preventDefault();

    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const orderType = getActiveOrderType();
    const address = document.getElementById('custAddress').value.trim();
    const tableNum = document.getElementById('custTable').value.trim();
    const payment = document.getElementById('selectedPaymentMethod').value;
    const notes = document.getElementById('custNotes').value.trim();

    if (!name || !phone) {
      showToast("Please fill in your name and contact phone number.", "error");
      return;
    }

    if (orderType === 'delivery' && !address) {
      showToast("Please provide your delivery address.", "error");
      return;
    }

    const totals = window.cartManager.calculateTotals(orderType);
    const orderItems = [...window.cartManager.cart];
    const coupon = window.cartManager.appliedCoupon;

    const orderData = {
      date: new Date().toLocaleString(),
      orderType,
      customer: { name, phone, address: orderType === 'delivery' ? address : (orderType === 'dinein' ? `Table: ${tableNum || 'Host Seating'}` : 'Self Pickup at Shangrilla Counter') },
      payment,
      notes,
      couponCode: coupon && totals.subtotal >= coupon.minOrder ? coupon.code : null,
      items: orderItems,
      totals
    };

    // Send the full order to the restaurant on WhatsApp (must run inside the submit gesture)
    openWhatsApp(buildOrderWhatsAppMessage(orderData));

    window.cartManager.saveOrder(orderData);
    window.cartManager.clearCart();

    checkoutModal.classList.remove('open');
    event.target.reset();
    showOrderTracker(orderData);
  };

  const ORDER_TYPE_LABELS = { delivery: 'Express Delivery', pickup: 'Self Takeaway', dinein: 'Dine-In Order' };
  const PAYMENT_LABELS = { cash: 'Cash on Delivery', card: 'Card on Delivery', online: 'Digital / QR Pay' };

  // WhatsApp formatting: *bold*. Plain text otherwise; the URL encoding happens in openWhatsApp.
  function buildOrderWhatsAppMessage(order) {
    const { customer, totals } = order;
    const lines = [
      '*NEW ORDER - Shangrilla Garden & BBQ*',
      `Date: ${order.date}`,
      `Order Type: ${ORDER_TYPE_LABELS[order.orderType] || order.orderType}`,
      '',
      '*Customer Details*',
      `Name: ${customer.name}`,
      `Phone: ${customer.phone}`
    ];

    if (order.orderType === 'delivery') lines.push(`Delivery Address: ${customer.address}`);
    else if (order.orderType === 'pickup') lines.push(`Pickup: ${customer.address}`);
    else lines.push(customer.address); // "Table: ..."
    if (order.notes) lines.push(`Instructions: ${order.notes}`);

    lines.push('', '*Order Items*');
    order.items.forEach((item, idx) => {
      lines.push(`${idx + 1}. ${item.quantity} x ${item.title} (${item.portionName}) - ${formatPrice(item.unitPrice * item.quantity)}`);
      if (item.spiceLevel && item.spiceLevel !== 'Normal') lines.push(`   Spice: ${item.spiceLevel}`);
      if (item.addons && item.addons.length) lines.push(`   Add-ons: ${item.addons.map(a => a.name).join(', ')}`);
      if (item.instructions) lines.push(`   Note: ${item.instructions}`);
    });

    lines.push('', '*Bill Summary*', `Subtotal: ${formatPrice(totals.subtotal)}`);
    if (order.couponCode) lines.push(`Promo Code: ${order.couponCode}`);
    if (totals.discount > 0) lines.push(`Discount: -${formatPrice(totals.discount)}`);
    if (order.orderType === 'delivery') {
      lines.push(`Delivery: ${totals.deliveryFee === 0 ? 'FREE' : formatPrice(totals.deliveryFee)}`);
    }
    lines.push(
      `Sales Tax (${Math.round(RESTAURANT_DATA.taxRate * 100)}%): ${formatPrice(totals.tax)}`,
      `*Total: ${formatPrice(totals.grandTotal)}*`,
      '',
      `*Payment Method:* ${PAYMENT_LABELS[order.payment] || order.payment}`
    );

    return lines.join('\n');
  }

  function showOrderTracker(order) {
    const paymentLabel = PAYMENT_LABELS[order.payment] || order.payment;
    document.getElementById('trackerCustomerPhone').textContent = order.customer.phone;
    document.getElementById('receiptCustomerName').textContent = order.customer.name;
    document.getElementById('receiptCustomerContact').textContent = `${order.customer.phone} (${order.customer.address})`;
    document.getElementById('receiptPaymentMethod').textContent = paymentLabel;
    document.getElementById('receiptPaymentRibbon').textContent = paymentLabel;

    // Render receipt items
    const receiptItemsContainer = document.getElementById('receiptItemsList');
    receiptItemsContainer.innerHTML = order.items.map(item => `
      <div class="receipt-row">
        <span>${item.quantity}x ${escapeHtml(item.title)} (${escapeHtml(item.portionName)})</span>
        <span>${formatPrice(item.unitPrice * item.quantity)}</span>
      </div>
    `).join('');

    document.getElementById('receiptGrandTotal').textContent = formatPrice(order.totals.grandTotal);

    // Timeline labels depend on how the order is fulfilled
    const isDelivery = order.orderType === 'delivery';
    const step3Label = document.querySelector('#step3 .timeline-label');
    const step4Label = document.querySelector('#step4 .timeline-label');
    if (step3Label) step3Label.textContent = isDelivery ? 'On the Way' : 'Ready';
    if (step4Label) step4Label.textContent = isDelivery ? 'Delivered' : (order.orderType === 'dinein' ? 'Served' : 'Picked Up');

    // Static status: "Received" is done, every later step is processing.
    // Staff follow up with the customer directly, so nothing advances on its own.
    ['step1', 'step2', 'step3', 'step4'].forEach((id, idx) => {
      const step = document.getElementById(id);
      if (!step) return;
      step.classList.remove('active', 'completed', 'processing');
      step.classList.add(idx === 0 ? 'completed' : 'processing');
    });

    orderTrackerModal.classList.add('open');
    showToast('Order received! Our representative will be with you shortly.', 'success');
  }

  // -------------------------------------------------------------
  // Table Reservation
  // -------------------------------------------------------------
  function setMinReservationDate() {
    const dateInput = document.getElementById('resDate');
    if (!dateInput) return;
    const now = new Date();
    const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    dateInput.min = local.toISOString().slice(0, 10);
  }

  window.submitReservation = function(event) {
    event.preventDefault();
    const guestName = document.getElementById('resName').value.trim();
    const guestPhone = document.getElementById('resPhone').value.trim();
    const guestsSelect = document.getElementById('resGuests');
    const timeSelect = document.getElementById('resTime');
    const areaSelect = document.getElementById('resArea');
    const guests = guestsSelect.value;
    const date = document.getElementById('resDate').value;
    const area = areaSelect.value;
    const optionText = (select) => select.options[select.selectedIndex]?.text || select.value;

    const isMarquee = area === 'marquee' || parseInt(guests) >= 50;
    const bookingType = isMarquee ? 'Royal Marquee & Banquet' : 'Table';

    const prettyDate = date
      ? new Date(`${date}T00:00:00`).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
      : date;

    openWhatsApp([
      `*${bookingType.toUpperCase()} RESERVATION REQUEST - Shangrilla Garden & BBQ*`,
      '',
      `Name: ${guestName}`,
      `Phone: ${guestPhone}`,
      `Guests / Event Size: ${optionText(guestsSelect)}`,
      `Date: ${prettyDate}`,
      `Time Slot: ${optionText(timeSelect)}`,
      `Seating / Venue: ${optionText(areaSelect)}`
    ].join('\n'));

    showToast(`${bookingType} booking for ${guestName} (${guests} guests) on ${date} sent to WhatsApp. Our manager will confirm shortly.`, 'success');
    event.target.reset();
  };

  // -------------------------------------------------------------
  // Promo code shortcut (footer link)
  // -------------------------------------------------------------
  window.applyPromoCode = function(code) {
    const res = window.cartManager.applyCoupon(code);
    showToast(res.message, res.success ? 'success' : 'error');
  };

  // -------------------------------------------------------------
  // Toast Notification System
  // -------------------------------------------------------------
  window.showToast = function(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icon = document.createElement('i');
    icon.className = `fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}`;
    const text = document.createElement('span');
    text.textContent = message;
    toast.append(icon, text);

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  };

  // -------------------------------------------------------------
  // Event Listeners
  // -------------------------------------------------------------
  function setupEventListeners() {
    // Search (debounced so typing stays smooth on phones)
    if (searchInput) {
      let searchTimer = null;
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        if (searchClearBtn) {
          searchClearBtn.classList.toggle('visible', searchQuery.length > 0);
        }
        clearTimeout(searchTimer);
        searchTimer = setTimeout(renderMenu, 150);
      });
    }

    if (searchClearBtn) {
      searchClearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        searchClearBtn.classList.remove('visible');
        renderMenu();
      });
    }

    // Sort
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderMenu();
      });
    }

    // Cart Drawer Toggle
    if (cartBtn) {
      cartBtn.addEventListener('click', () => {
        if (window.closeMobileNav) window.closeMobileNav();
        cartOverlay.classList.add('open');
      });
    }
    if (closeCartBtn) closeCartBtn.addEventListener('click', () => cartOverlay.classList.remove('open'));
    if (cartOverlay) {
      cartOverlay.addEventListener('click', (e) => {
        if (e.target === cartOverlay) cartOverlay.classList.remove('open');
      });
    }

    // Modal Closers
    if (closeCustomizerBtn) closeCustomizerBtn.addEventListener('click', () => customizerModal.classList.remove('open'));
    if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', () => checkoutModal.classList.remove('open'));
    if (closeTrackerBtn) closeTrackerBtn.addEventListener('click', () => orderTrackerModal.classList.remove('open'));

    [customizerModal, checkoutModal, orderTrackerModal].forEach(modal => {
      if (modal) {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) modal.classList.remove('open');
        });
      }
    });

    // Spice level selection styling
    document.querySelectorAll('input[name="spiceOption"]').forEach(input => {
      input.addEventListener('change', () => window.recalcModalPrice());
    });

    // Escape closes whatever is open on top
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      const openLayer = [orderTrackerModal, checkoutModal, customizerModal, cartOverlay]
        .find(el => el && el.classList.contains('open'));
      if (openLayer) {
        openLayer.classList.remove('open');
      } else if (window.isWhatsAppWidgetOpen && window.isWhatsAppWidgetOpen()) {
        window.closeWhatsAppWidget();
      } else if (window.closeMobileNav) {
        window.closeMobileNav();
      }
    });

    // Coupon Apply
    if (applyCouponBtn && couponInput) {
      const applyCoupon = () => {
        const res = window.cartManager.applyCoupon(couponInput.value);
        showToast(res.message, res.success ? 'success' : 'error');
        if (res.success) couponInput.value = '';
      };
      applyCouponBtn.addEventListener('click', applyCoupon);
      couponInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') applyCoupon();
      });
    }

    // React to cart manager updates
    window.addEventListener('cart:updated', () => {
      updateCartUI();
      if (customizerModal.classList.contains('open')) {
        window.recalcModalPrice();
      }
      if (checkoutModal.classList.contains('open')) {
        renderCheckoutSummary(getActiveOrderType());
      }
    });
  }

  // -------------------------------------------------------------
  // Copy Link for Social Sharing
  // -------------------------------------------------------------
  window.copyPageShareLink = function() {
    const url = window.location.href.split('#')[0];
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        showToast("Website link copied to clipboard! Share it with friends & family.", "success");
      }).catch(() => {
        showToast("Link: " + url, "success");
      });
    } else {
      showToast("Link: " + url, "success");
    }
  };
});
