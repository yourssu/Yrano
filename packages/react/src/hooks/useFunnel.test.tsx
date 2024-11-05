import { act } from '@testing-library/react-hooks';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useFunnel } from './useFunnel';
import '@testing-library/jest-dom';

const steps = ['Step1', 'Step2', 'Step3'] as const;

describe('useFunnel', () => {
  it('올바른 initialStep이 랜더링', () => {
    const TestComponent = () => {
      const [Funnel, { next }] = useFunnel({
        initialStep: 'Step2',
        steps,
      });

      return (
        <div>
          <Funnel>
            <Funnel.Step name="Step1">
              <div>Content of Step1</div>
            </Funnel.Step>
            <Funnel.Step name="Step2">
              <div>Content of Step2</div>
            </Funnel.Step>
            <Funnel.Step name="Step3">
              <div>Content of Step3</div>
            </Funnel.Step>
          </Funnel>
          <button onClick={next}>Next</button>
        </div>
      );
    };

    const { getByText } = render(<TestComponent />);

    expect(getByText('Content of Step2')).toBeInTheDocument();
  });

  it('next 함수 호출 시 다음 스텝으로 이동', () => {
    const TestComponent = () => {
      const [Funnel, { next }] = useFunnel({
        initialStep: 'Step1',
        steps,
      });

      return (
        <div>
          <Funnel>
            <Funnel.Step name="Step1">
              <div>Content of Step1</div>
            </Funnel.Step>
            <Funnel.Step name="Step2">
              <div>Content of Step2</div>
            </Funnel.Step>
            <Funnel.Step name="Step3">
              <div>Content of Step3</div>
            </Funnel.Step>
          </Funnel>
          <button onClick={next}>Next</button>
        </div>
      );
    };

    const { getByText, queryByText } = render(<TestComponent />);

    act(() => {
      getByText('Next').click();
    });

    expect(getByText('Content of Step2')).toBeInTheDocument();
    expect(queryByText('Content of Step1')).not.toBeInTheDocument();
  });

  it('prev 함수 호출 시 이전 스텝으로 이동', () => {
    const TestComponent = () => {
      const [Funnel, { next, prev }] = useFunnel({
        initialStep: 'Step2',
        steps,
      });

      return (
        <div>
          <Funnel>
            <Funnel.Step name="Step1">
              <div>Content of Step1</div>
            </Funnel.Step>
            <Funnel.Step name="Step2">
              <div>Content of Step2</div>
            </Funnel.Step>
            <Funnel.Step name="Step3">
              <div>Content of Step3</div>
            </Funnel.Step>
          </Funnel>
          <button onClick={next}>Next</button>
          <button onClick={prev}>Prev</button>
        </div>
      );
    };

    const { getByText, queryByText } = render(<TestComponent />);

    act(() => {
      getByText('Prev').click();
    });

    expect(getByText('Content of Step1')).toBeInTheDocument();
    expect(queryByText('Content of Step2')).not.toBeInTheDocument();
  });

  it('첫번째 스텝에서 prev 함수 호출 시 이전 스텝으로 이동하지 않음', () => {
    const TestComponent = () => {
      const [ Funnel, {prev} ] = useFunnel({
        initialStep: 'Step1',
        steps,
      });

      return (
        <div>
          <Funnel>
            <Funnel.Step name="Step1">
              <div>Content of Step1</div>
            </Funnel.Step>
            <Funnel.Step name="Step2">
              <div>Content of Step2</div>
            </Funnel.Step>
            <Funnel.Step name="Step3">
              <div>Content of Step3</div>
            </Funnel.Step>
          </Funnel>
          <button onClick={prev}>Prev</button>
        </div>
      );
    };

    const { getByText } = render(<TestComponent />);

    act(() => {
      getByText('Prev').click();
    });

    expect(getByText('Content of Step1')).toBeInTheDocument();
  });
});
