# Accessibility Guidelines

## WCAG 2.1 AA Compliance

### Level A Requirements
- **Non-text Content:** All images have descriptive alt text
- **Audio/Video:** Captions for audio content, audio descriptions for video
- **Adaptable Content:** Information structure is preserved when styling is removed
- **Distinguishable Content:** Color is not the only means of conveying information
- **Keyboard Accessible:** All functionality available via keyboard
- **No Seizures:** Content doesn't cause seizures or physical reactions
- **Navigable:** Users can find content and determine where they are

### Level AA Requirements  
- **Color Contrast:** 4.5:1 ratio for normal text, 3:1 for large text
- **Resize Text:** Text can be resized up to 200% without loss of functionality
- **Images of Text:** Use actual text instead of images of text when possible
- **Keyboard Navigation:** No keyboard trap, logical tab order
- **Focus Visible:** Keyboard focus indicator is visible
- **Language:** Page language is identified in HTML
- **Context Changes:** No unexpected context changes on focus/input

## Color & Visual Design

### Color Contrast Standards
- **Normal Text:** 4.5:1 minimum contrast ratio
- **Large Text (18pt+ or 14pt+ bold):** 3:1 minimum contrast ratio  
- **Graphical Objects:** 3:1 for UI components and meaningful graphics
- **Brand Colors:** Ensure brand palette meets contrast requirements

### Color Independence
- Never rely solely on color to convey information
- Use multiple indicators: color + text, color + icons, color + patterns
- Provide text alternatives for color-coded information
- Test with color blindness simulators

### Typography
- **Font Size:** Minimum 16px for body text
- **Line Height:** 1.5x font size minimum
- **Font Weight:** Ensure sufficient weight for readability
- **Font Choice:** Use fonts designed for screen reading

## Keyboard Navigation

### Focus Management
- **Visible Focus:** Clear focus indicators with sufficient contrast
- **Focus Order:** Logical tab sequence following visual layout
- **Focus Trapping:** Modal dialogs trap focus within the modal
- **Skip Links:** Provide "skip to main content" links

### Keyboard Shortcuts
- **Standard Shortcuts:** Support common browser shortcuts
- **Custom Shortcuts:** Document any custom keyboard shortcuts
- **Escape Key:** Always allows escape from modal states
- **Enter/Space:** Activate buttons and interactive elements

### Interactive Elements
- All interactive elements must be keyboard accessible
- Use semantic HTML elements (button, a, input) when possible
- Implement proper ARIA patterns for custom components
- Ensure touch targets are at least 44x44 pixels

## Screen Reader Support

### Semantic HTML
- Use proper heading hierarchy (h1 → h2 → h3)
- Use lists (ul, ol) for grouped content
- Use proper form labels and fieldsets
- Use semantic elements (nav, main, aside, footer)

### ARIA Implementation
- **ARIA Labels:** Provide accessible names for complex elements
- **ARIA Landmarks:** Define page regions (banner, navigation, main, contentinfo)
- **ARIA States:** Communicate dynamic state changes (expanded, selected)
- **ARIA Descriptions:** Provide additional context when needed

### Content Structure
- **Headings:** Create logical content outline
- **Lists:** Group related items in lists
- **Tables:** Use proper table headers and captions
- **Forms:** Associate labels with form controls

## Form Accessibility

### Label Association
- Every form control has an associated label
- Use `<label for="id">` or wrap controls in `<label>`
- Provide placeholder text only as hints, not primary labels
- Use fieldsets for grouped form controls

### Error Handling
- **Error Identification:** Clearly identify form errors
- **Error Messages:** Provide specific, actionable error descriptions
- **Error Prevention:** Validate input and provide clear instructions
- **Error Location:** Link error messages to specific form fields

### Form Instructions
- Provide clear instructions for form completion
- Indicate required fields clearly
- Explain any format requirements
- Provide examples for complex inputs

## Dynamic Content

### Loading States
- Announce loading states to screen readers
- Use ARIA live regions for status updates
- Provide skip options for long-running processes
- Maintain focus context during content updates

### Content Updates
- **ARIA Live Regions:** Announce important changes
- **Focus Management:** Move focus appropriately after changes
- **State Communication:** Update ARIA states when content changes
- **Graceful Degradation:** Ensure functionality without JavaScript

## Testing Strategy

### Automated Testing
- **axe-core:** Include in unit and integration tests
- **Lighthouse:** Regular accessibility audits
- **eslint-plugin-jsx-a11y:** Catch accessibility issues during development
- **Pa11y:** Command-line accessibility testing

### Manual Testing
- **Keyboard Navigation:** Test all functionality with keyboard only
- **Screen Reader Testing:** Test with NVDA, JAWS, VoiceOver
- **Zoom Testing:** Test at 200% zoom level
- **Color Blindness:** Test with color blindness simulators

### User Testing
- Include users with disabilities in testing process
- Gather feedback on real-world accessibility
- Iterate based on user needs and preferences
- Document accessibility user personas

## Implementation Checklist

### Development Phase
- [ ] Use semantic HTML elements
- [ ] Implement proper heading hierarchy
- [ ] Add alt text to all images
- [ ] Ensure sufficient color contrast
- [ ] Implement keyboard navigation
- [ ] Add ARIA labels and landmarks
- [ ] Test with screen readers
- [ ] Validate HTML for accessibility

### Testing Phase
- [ ] Run automated accessibility tests
- [ ] Perform keyboard navigation testing
- [ ] Test with multiple screen readers
- [ ] Verify color contrast ratios
- [ ] Test at 200% zoom
- [ ] Validate form accessibility
- [ ] Check focus management
- [ ] Test error handling

### Pre-Launch
- [ ] Complete accessibility audit
- [ ] Document known accessibility limitations
- [ ] Create accessibility statement
- [ ] Train content creators on accessibility
- [ ] Establish accessibility support contact

## Tools & Resources

### Testing Tools
- **Automated:** axe DevTools, Lighthouse, WAVE
- **Screen Readers:** NVDA (free), JAWS, VoiceOver
- **Color:** Colour Contrast Analyser, WebAIM Contrast Checker
- **Simulators:** Colorblinding simulator, No Coffee vision simulator

### Development Tools
- **React:** @axe-core/react, eslint-plugin-jsx-a11y
- **Testing:** @testing-library/jest-dom accessibility matchers
- **Browser Extensions:** axe DevTools, WAVE, Accessibility Insights

### Documentation
- **Guidelines:** WCAG 2.1 Quick Reference
- **Patterns:** ARIA Authoring Practices Guide
- **Testing:** WebAIM testing guides
- **Legal:** Section 508, ADA compliance information

## Accessibility Statement

Include an accessibility statement on your website covering:
- Commitment to accessibility
- Standards compliance level (WCAG 2.1 AA)
- Known limitations and workarounds
- Contact information for accessibility feedback
- Date of last accessibility review

## Ongoing Maintenance

### Regular Audits
- **Monthly:** Automated accessibility scans
- **Quarterly:** Manual accessibility review
- **Annually:** Comprehensive accessibility audit
- **Ongoing:** Monitor user feedback and update accordingly

### Content Guidelines
- Train content creators on accessibility requirements
- Provide accessibility checklists for content updates
- Regular review of user-generated content for accessibility
- Maintain accessibility standards in design systems

### Stay Updated
- Monitor WCAG updates and new guidelines
- Follow accessibility best practices evolution
- Participate in accessibility community discussions
- Regular training updates for development team
