import { ComponentLoader } from 'adminjs';

const componentLoader = new ComponentLoader();

// Override the built-in Login page with our dark-theme version
componentLoader.override('Login', './components/login');

// Additional custom pages/components can be registered from options.ts

export const CourseQuickCreate = componentLoader.add('CourseQuickCreate', './components/course-create');
export const CourseDetailedEdit = componentLoader.add('CourseDetailedEdit', './components/course-edit');
export const QuizQuickCreate = componentLoader.add('QuizQuickCreate', './components/quiz-create');
export const UserQuickCreate = componentLoader.add('UserQuickCreate', './components/user-create');
export const UserDetailedEdit = componentLoader.add('UserDetailedEdit', './components/user-edit');
export const ForumDetailedEdit = componentLoader.add('ForumDetailedEdit', './components/forum-edit');

export default componentLoader;
