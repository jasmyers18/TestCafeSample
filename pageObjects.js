// Quick example of Page Model in testCafe. Typically I would put different page elements on different files. 
// For this example, just threw everything into one file.

import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        // Home Page
        this.giftCardLnk = Selector('#footerWrapper > div:nth-child(2) > article.footerLinkList.hide-mobile > div > div > div > div.footerLinkListColumn.hide-mobile.hide-mobileNav > ul > li:nth-child(5) > a').withText('Gift Cards');

        // Gift Card Page
        this.shipGiftCardBtn = Selector('#primary > div > div.virtual-row-wrapper > div.wrapper-physical.wrapper > div > div > a').withText('SHIP A GIFT CARD');
        
        // Gift Card Purchase Form Page
        this.cardVal100 = Selector('#GC100');
        this.toFld = Selector('#dwfrm_giftcert_purchasephysical_recipient');
        this.fromFld = Selector('#dwfrm_giftcert_purchasephysical_from');
        this.messageFld = Selector('#dwfrm_giftcert_purchasephysical_message');
        this.addToCartBtn = Selector('#AddToBasketButtonPhysical');
        this.cartBtn = Selector('#mini-cart > div.mini-cart-total > a > span.mini-cart-item-word')

        // Shopping Cart
        this.basketContainerTxt = Selector('#csc-basket-container > div.row.bg-light.align-items-center.cart-container-header > div > h5')
        this.itemLnk = Selector('#csc-tabpanel-basket-list > div > div > div > div > div:nth-child(2) > ul > li:nth-child(1) > h6 > a')
        this.itemNoTxt = Selector('#csc-tabpanel-basket-list > div > div > div > div > div:nth-child(2) > ul > li.sku > span.value')
        this.cardTypeTxt = Selector('#csc-tabpanel-basket-list > div > div > div > div > div:nth-child(2) > ul > li.attribute > span.value')
        this.toValueTxt = Selector('#csc-tabpanel-basket-list > div > div > div > div > div:nth-child(2) > ul > li:nth-child(5)')
        this.fromValueTxt = Selector('#csc-tabpanel-basket-list > div > div > div > div > div:nth-child(2) > ul > li:nth-child(6)')
        this.priceValueTxt = Selector('#csc-tabpanel-basket-list > div > div > div > div > div:nth-child(2) > ul > li.item-price > span.price.font-weight-bold')
        this.totalValueTxt = Selector('#csc-tabpanel-basket-list > div > div > div > div > div:nth-child(2) > ul > li.item-total > div > span.price-total.font-weight-bold')
    }
}