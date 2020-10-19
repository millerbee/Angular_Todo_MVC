// spec.js
describe('Todo Task Entry', function() {
  var newTodo = element(by.css('input.new-todo'));
  var editTodo = element(by.css('input.new-todo'));
  var completeTodo= element(by.css('.toggle'));
  var deleteTodo = element(by.css('button.destroy'));
  var CheckAll = element(by.css('footer'));
  var clearTodo = element(by.css('button.clear-completed'));
 
  it('should allow various entries', function() {
  
    browser.get('http://todomvc.com/examples/angular2/');
    ignoreSynchronization = true;
    browser.waitForAngular();
    browser.driver.sleep(1000);
    browser.waitForAngular();

  newTodo.sendKeys('CaMElcaSe');
  newTodo.sendKeys(protractor.Key.ENTER);
  newTodo.sendKeys('Add66');
  newTodo.sendKeys(protractor.Key.ENTER);
  newTodo.sendKeys('Fun!');
  newTodo.sendKeys(protractor.Key.ENTER);
  newTodo.sendKeys('A');
  newTodo.sendKeys(protractor.Key.ENTER);
 

  expect(element.all(by.css('.view')).count()).toEqual(4);
    });

  it('should allow completes', function() {
      completeTodo.click();   

  });

  it('allow edit of task', function() {
     editTodo.sendKeys('editme');
     editTodo.sendKeys('editok');
   });

  it('should clear comleted tasks', function() {
      clearTodo.click();
    });
  
  it('should delete a task', function() {
     newTodo.sendKeys('Delete');
     newTodo.sendKeys(protractor.Key.ENTER);
     completeTodo.click();  
     deleteTodo.click();
   });
});









