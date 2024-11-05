# useFunnel

`useFunnel` is a custom hook that helps manage components with multiple steps or processes. It makes it easy to handle transitions between components with steps, providing `next`, `prev`, and `setStep` functions for navigation.

## API

```ts
function useFunnel(initialStep: string, steps: string[]);
```

#### Parameters
initialStep (string): Sets the initial step of the funnel.
steps (string[]): Defines all the steps in the funnel.


#### Return Value
- Funnel: The funnel component object that is used as a parent component.
- next: Moves to the next step's component.
- prev: Moves to the previous step's component.
- setStep: Manually moves to a specific step's component.


## Example
```jsx
const MyComponent = () => {
  const { Funnel, next, prev, setStep } 
    = useFunnel('step1', ['step1', 'step2', 'step3']);

  return (
    <Funnel>
      <Funnel.Step name="step1">
        <div>Step1 Component</div>
        <button onClick={next}>Next</button>
      </Funnel.Step>
      <Funnel.Step name="step2">
        <div>Step2 Component</div>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </Funnel.Step>
      <Funnel.Step name="step3">
        <div>Step3 Component</div>
        <button onClick={prev}>Prev</button>
      </Funnel.Step>
    </Funnel>
  );
};
```

## Notes
1. Define each step component by setting the name property of Funnel.Step.
2. If prev is called on the first step or next is called on the last step, the component will not transition.

