import CaseStudiesPage from '../app/case-studies/page';
import { redirect } from 'next/navigation';
jest.mock('next/navigation', () => ({ redirect: jest.fn() }));
it('keeps the previous case study route pointing to selected work', () => {
  CaseStudiesPage();
  expect(redirect).toHaveBeenCalledWith('/#selected-work');
});
