import React from 'react'
import { userEvent } from '@testing-library/user-event'  
import { render, screen, fireEvent } from '@testing-library/react'  
import { HelloWorld } from '../../components/HelloWorld.jsx'  
import '@testing-library/jest-dom'  
 
export const helloWorldSteps = ({  
	given: Given,  
	and: And,  
	when: When,  
	then: Then  
}) => {  
	Given(/^Hello World$/, () => {  
		render(<HelloWorld />)  
	})

	Then(/^I should see "([^"]*)"$/, (text) => {  
		const helloWorld = screen.getByTestId('title')  
		expect(helloWorld).toHaveTextContent(text)  
	})

	When(/^the user presses the button (.*)$/, async (arg0) => {
		const button = screen.getByTestId(arg0)
		await userEvent.click(button)
    })

	When(/^the user does a right click in the button (.*)$/, async (arg0) => {
		const button = screen.getByTestId(arg0)
		fireEvent.contextMenu(button)
		await new Promise(resolve => setTimeout(resolve, 500))
    })

	Then(/^the title should show (.*)$/, (arg0) => {
		const title = screen.getByTestId('title').innerHTML
		expect(title).toBe(arg0)
    })
}  
 
export default helloWorldSteps