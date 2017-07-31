import { DroBoPlayerPage } from './app.po';

describe('dro-bo-player App', () => {
  let page: DroBoPlayerPage;

  beforeEach(() => {
    page = new DroBoPlayerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
