import Page from '../testCafe/pageObjects';

const page = new Page();

fixture`Columbia Gift Card`
    .page`https://www.columbia.com`;

test('Can add physical gift card to cart', async t => {
    const toTxt = 'Beth Jones';
    const fromTxt = 'Joe Smith';
    const msgTxt = 'A gift card for you';

    await t
        // Go to Girft Card Page
        .click(page.giftCardLnk)

        // Select Physical card. Navigates to Gift Card Purchase Form
        .click(page.shipGiftCardBtn)

        // Fill in the form
        .click(page.cardVal100)
        .typeText(page.toFld, toTxt)
        .typeText(page.fromFld, fromTxt)
        .typeText(page.messageFld, msgTxt)
        .click(page.addToCartBtn)

        // Go to Shopping Cart
        .click(page.cartBtn)

        // Verify the card was added correctly
        .expect(page.basketContainerTxt.textContent).contains('1')

        .expect(page.itemLnk.textContent).contains('Physical Gift Card')
        .expect(page.itemNoTxt.textContent).contains('PGC-COL-US')
        .expect(page.cardTypeTxt.textContent).contains('Standard')
        .expect(page.toValueTxt.textContent).contains(toTxt)
        .expect(page.fromValueTxt.textContent).contains(fromTxt)
        .expect(page.priceValueTxt.textContent).contains('$100.00')
        .expect(page.totalValueTxt.textContent).contains('$100.00');
});