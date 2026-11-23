import ProjectsPage from '../app/projects/page';
import { redirect } from 'next/navigation';
jest.mock('next/navigation', () => ({ redirect: jest.fn() }));
it('keeps the previous portfolio route pointing to selected work', () => {
  ProjectsPage();
  expect(redirect).toHaveBeenCalledWith('/#selected-work');
});
