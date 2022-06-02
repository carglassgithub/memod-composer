import { mount } from '@cypress/vue'
import ComposerEditor from '../../src/components/composer/index.vue'

it('Composer', () => {
  // with JSX
  mount(ComposerEditor)
  cy.find('.composer-editor').should('be.visible')
})
