import { TodoListNgPage } from './app.po';

describe('todo-list-ng App', function() {
  let page: TodoListNgPage;

  beforeEach(() => {
    page = new TodoListNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
