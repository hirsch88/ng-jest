import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  BalAccordionModule,
  BalCoreModule,
  BalHeadingModule,
} from '@baloise/design-system-components-angular';
import {
  waitForComponent,
  waitForDesignSystem,
} from '@baloise/design-system-components';
import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';
import userEvent from '@testing-library/user-event';

describe('AppComponent', () => {
  it('should render Welcome', async () => {
    const { container } = await render(AppComponent, {
      imports: [BalCoreModule.forRoot(), BalHeadingModule, BalAccordionModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    await waitForDesignSystem(container);

    expect(screen.getByText('Welcome')).toBeVisible();
  });

  it('should open accordion', async () => {
    const { container } = await render(AppComponent, {
      imports: [BalCoreModule.forRoot(), BalHeadingModule, BalAccordionModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    await waitForDesignSystem(container);

    expect(screen.getByText('My Content')).not.toBeVisible();

    const accordion = screen.getByText('open');
    const user = userEvent.setup();
    await user.click(accordion);
    await waitForComponent(accordion);

    expect(screen.getByText('My Content')).toBeVisible();
  });
});
