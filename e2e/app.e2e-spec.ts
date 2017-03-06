import { HotelListingPage } from './app.po';

describe('hotel-listing App', () => {
  let page: HotelListingPage;

  beforeEach(() => {
    page = new HotelListingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
