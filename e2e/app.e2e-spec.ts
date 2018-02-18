import { AppPage } from './app.po';

describe('pandora App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display header title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Pandora');
  });
});
