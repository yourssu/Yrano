# useFunnel

`useFunnel`은 여러 단계나 프로세스를 가진 컴포넌트를 관리하는 데 도움을 주는 커스텀 훅입니다.
단계가 존재하는 컴포넌트 간 전환을 쉽게 관리할 수 있으며, `next`, `prev`, `setStep` 함수들을 제공하여 네비게이션을 지원합니다.

## API

```ts
function useFunnel(initialStep: string, steps: string[]);
```

#### Parameters

- `initialStep` (string): 퍼널의 초기 스텝을 설정합니다.
- `totalSteps` (string[]): 퍼널의 전체 스텝을 설정합니다.

#### Return value

- Funnel: 퍼널 객체입니다. 상위 컴포넌트로 활용합니다.
- next: 다음 스텝의 컴포넌트로 이동합니다.
- prev: 이전 스텝의 컴포넌트로 이동합니다.
- setStep: 특정 스텝의 컴포넌트로 이동합니다.

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
	  </Funnel.step>
	  <Funnel.Step name="step2">
	  	<div>Step2 Component</div>
	  	<button onClick={next}>Prev</button>
	  </Funnel.step>
	  <Funnel.Step name="step3">
	  	<div>Step3 Component</div>
		<button onClick={prev}>Prev</button>
    	<button onClick={next}>Next</button>
	  </Funnel.step>
	</Funnel>
  );
};
```

## Notes

1. Funnel.Step의 name 속성을 통해 각 스텝의 컴포넌트를 정의합니다.
2. 첫번째 컴포넌트에서 prev를 호출하거나 마지막 컴포넌트에서 next를 호출하면 이동하지 않습니다.