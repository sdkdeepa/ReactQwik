import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { QwikHorizontalLinearStepper } from '~/integrations/react/stepper';

// Refer : https://mui.com/material-ui/react-stepper/#horizontal-stepper

export default component$(() => {
  return (
    <>
      <QwikHorizontalLinearStepper steps={['Select campaign settings', 'Create an ad group', 'Create an ad']} />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik React Demo - Stepper MUI Example',
};
