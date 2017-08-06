import { CourtresNgPage } from './app.po';

describe('courtres-ng App', () => {
  let page: CourtresNgPage;

  beforeEach(() => {
    page = new CourtresNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
