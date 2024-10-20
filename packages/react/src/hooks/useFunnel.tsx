import { useState, Children, ReactElement, ReactNode } from 'react';

interface StepProps<StepName extends string> {
  name: StepName;
  children: React.ReactNode;
}

type StepElementType<StepName extends string> = ReactElement<StepProps<StepName>>;

interface FunnelProps<StepName extends string> {
  children: StepElementType<StepName>[] | StepElementType<StepName>;
}

export const useFunnel = <Steps extends readonly string[]>({
  initialStep,
  steps,
}: {
  initialStep: Steps[number];
  steps: Steps;
}) => {
  const [currentStep, setCurrentStep] = useState<Steps[number]>(initialStep);

  const next = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const prev = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const Step = (props: StepProps<Steps[number]>) => {
    return <>{props.children}</>;
  };

  const isFunnelStep = (child: ReactNode): child is StepElementType<Steps[number]> => {
    return (child as StepElementType<Steps[number]>).props.name !== undefined;
  };

  const Funnel = ({ children }: FunnelProps<Steps[number]>) => {
    const targetStep = Children.toArray(children).find((child) => {
      if (!isFunnelStep(child)) return false;
      return child.props.name === currentStep;
    }) as StepElementType<Steps[number]> | undefined;

    return targetStep;
  };

  const setStep = setCurrentStep;
  return [Object.assign(Funnel, { Step }), next, prev, setStep] as const;
};
