import { AppTicTacToePage } from './app.po';

describe('app-tic-tac-toe App', () => {
  let page: AppTicTacToePage;

  beforeEach(() => {
    page = new AppTicTacToePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
