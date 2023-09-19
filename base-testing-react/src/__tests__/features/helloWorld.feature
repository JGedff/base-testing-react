Feature: Hello World  

    Background: Given the user opens the app
        Given Hello World

	Scenario: Check Hello World  
		Then I should see "Hello World!"
	
    Scenario Outline: Check Buttons
		When the user presses the button <button>
        Then the title should show <text>

        Examples:
            | button   | text                     |
            | button1  | You pressed the button 1 |
            | button2  | You pressed the button 2 |
            | button3  | You pressed the button 3 |
            | button4  | You pressed the button 4 |
            | button5  | You pressed the button 5 |
    