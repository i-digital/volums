import { VoluMSPage } from './app.po';

describe('volu-ms App', () => {
  let page: VoluMSPage;

  beforeEach(() => {
    page = new VoluMSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
