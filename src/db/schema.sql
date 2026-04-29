-- ============================================================
-- Полная схема базы данных Netcourse
-- Сгенерировано из src/drizzle/schema.ts
-- ============================================================

-- ── Удалить существующие объекты ──────────────────────────────────────────────
DROP TABLE IF EXISTS
  certifications,
  user_badges,
  badges,
  user_social_links,
  progress,
  enrollments,
  answers,
  questions,
  quiz_attempts,
  quizzes,
  forum_reply_likes,
  forum_post_likes,
  forum_reply_tags,
  forum_post_tags,
  forum_replies,
  forum_posts,
  forum_tags,
  course_ratings,
  lessons,
  sections,
  courses,
  users
CASCADE;

DROP TYPE IF EXISTS "ContentType";
DROP TYPE IF EXISTS "ProgressStatus";
DROP TYPE IF EXISTS "QuestionType";
DROP TYPE IF EXISTS "Role";
DROP TYPE IF EXISTS "SocialPlatform";

-- ── Enums ─────────────────────────────────────────────────────────────────────
CREATE TYPE "ContentType"   AS ENUM ('video', 'text', 'quiz');
CREATE TYPE "ProgressStatus" AS ENUM ('not_started', 'in_progress', 'completed');
CREATE TYPE "QuestionType"  AS ENUM ('single', 'multiple', 'text');
CREATE TYPE "Role"          AS ENUM ('ADMIN', 'USER', 'STUDENT');
CREATE TYPE "SocialPlatform" AS ENUM ('github', 'twitter', 'youtube', 'website', 'other');

-- ── users ─────────────────────────────────────────────────────────────────────
CREATE TABLE users (
  id         SERIAL PRIMARY KEY,
  email      TEXT NOT NULL,
  password   TEXT NOT NULL,
  username   TEXT,
  avatar_url TEXT,
  bio        TEXT,
  created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  role       "Role" NOT NULL DEFAULT 'USER'
);
CREATE UNIQUE INDEX users_email_key    ON users USING btree (email   ASC NULLS LAST);
CREATE UNIQUE INDEX users_username_key ON users USING btree (username ASC NULLS LAST);

-- ── courses ───────────────────────────────────────────────────────────────────
CREATE TABLE courses (
  id                       SERIAL PRIMARY KEY,
  title                    TEXT NOT NULL,
  description              TEXT,
  category                 TEXT,
  require_quiz_completion  BOOLEAN NOT NULL DEFAULT FALSE,
  min_quiz_score           INTEGER NOT NULL DEFAULT 65
);

-- ── sections ──────────────────────────────────────────────────────────────────
CREATE TABLE sections (
  id          SERIAL PRIMARY KEY,
  course_id   INTEGER NOT NULL,
  title       TEXT NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  CONSTRAINT "Section_course_id_fkey"
    FOREIGN KEY (course_id) REFERENCES courses(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);

-- ── lessons ───────────────────────────────────────────────────────────────────
CREATE TABLE lessons (
  id           SERIAL PRIMARY KEY,
  section_id   INTEGER NOT NULL,
  title        TEXT NOT NULL,
  content_type "ContentType",
  video_url    TEXT,
  text_content TEXT,
  order_index  INTEGER NOT NULL DEFAULT 0,
  CONSTRAINT "Lesson_section_id_fkey"
    FOREIGN KEY (section_id) REFERENCES sections(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);

-- ── quizzes ───────────────────────────────────────────────────────────────────
CREATE TABLE quizzes (
  id        SERIAL PRIMARY KEY,
  lesson_id INTEGER NOT NULL,
  title     TEXT NOT NULL,
  CONSTRAINT "Quiz_lesson_id_fkey"
    FOREIGN KEY (lesson_id) REFERENCES lessons(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);

-- ── questions ─────────────────────────────────────────────────────────────────
CREATE TABLE questions (
  id            SERIAL PRIMARY KEY,
  quiz_id       INTEGER NOT NULL,
  question_text TEXT NOT NULL,
  question_type "QuestionType",
  CONSTRAINT "Question_quiz_id_fkey"
    FOREIGN KEY (quiz_id) REFERENCES quizzes(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);

-- ── answers ───────────────────────────────────────────────────────────────────
CREATE TABLE answers (
  id          SERIAL PRIMARY KEY,
  question_id INTEGER,
  answer_text TEXT NOT NULL,
  is_correct  BOOLEAN NOT NULL DEFAULT FALSE,
  CONSTRAINT "Answer_question_id_fkey"
    FOREIGN KEY (question_id) REFERENCES questions(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);

-- ── quiz_attempts ─────────────────────────────────────────────────────────────
CREATE TABLE quiz_attempts (
  id           SERIAL PRIMARY KEY,
  user_id      INTEGER NOT NULL,
  quiz_id      INTEGER NOT NULL,
  score        INTEGER NOT NULL,
  passed       BOOLEAN NOT NULL DEFAULT FALSE,
  completed_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "QuizAttempts_user_id_fkey"
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT "QuizAttempts_quiz_id_fkey"
    FOREIGN KEY (quiz_id) REFERENCES quizzes(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);

-- ── enrollments ───────────────────────────────────────────────────────────────
CREATE TABLE enrollments (
  id          SERIAL PRIMARY KEY,
  user_id     INTEGER NOT NULL,
  course_id   INTEGER NOT NULL,
  enrolled_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Enrollment_user_id_fkey"
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT "Enrollment_course_id_fkey"
    FOREIGN KEY (course_id) REFERENCES courses(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE UNIQUE INDEX "Enrollment_user_id_course_id_key"
  ON enrollments USING btree (user_id ASC NULLS LAST, course_id ASC NULLS LAST);

-- ── progress ──────────────────────────────────────────────────────────────────
CREATE TABLE progress (
  id         SERIAL PRIMARY KEY,
  user_id    INTEGER NOT NULL,
  course_id  INTEGER NOT NULL,
  status     "ProgressStatus" NOT NULL DEFAULT 'not_started',
  updated_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Progress_user_id_fkey"
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT "progress_course_id_fkey"
    FOREIGN KEY (course_id) REFERENCES courses(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE UNIQUE INDEX progress_user_id_course_id_key
  ON progress USING btree (user_id ASC NULLS LAST, course_id ASC NULLS LAST);

-- ── user_social_links ─────────────────────────────────────────────────────────
CREATE TABLE user_social_links (
  id       SERIAL PRIMARY KEY,
  user_id  INTEGER NOT NULL,
  platform "SocialPlatform" NOT NULL,
  url      TEXT NOT NULL,
  CONSTRAINT "UserSocialLinks_user_id_fkey"
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);

-- ── badges ────────────────────────────────────────────────────────────────────
CREATE TABLE badges (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  description TEXT,
  image_url   TEXT,
  course_id   INTEGER,
  CONSTRAINT "Badge_course_id_fkey"
    FOREIGN KEY (course_id) REFERENCES courses(id)
    ON UPDATE CASCADE ON DELETE SET NULL
);

-- ── user_badges ───────────────────────────────────────────────────────────────
CREATE TABLE user_badges (
  id         SERIAL PRIMARY KEY,
  user_id    INTEGER NOT NULL,
  badge_id   INTEGER NOT NULL,
  awarded_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "UserBadge_user_id_fkey"
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT "UserBadge_badge_id_fkey"
    FOREIGN KEY (badge_id) REFERENCES badges(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE UNIQUE INDEX user_badges_user_id_badge_id_key
  ON user_badges USING btree (user_id ASC NULLS LAST, badge_id ASC NULLS LAST);

-- ── certifications ────────────────────────────────────────────────────────────
CREATE TABLE certifications (
  id               SERIAL PRIMARY KEY,
  user_id          INTEGER NOT NULL,
  course_id        INTEGER NOT NULL,
  issued_at        TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  certificate_code TEXT NOT NULL,
  CONSTRAINT "Certification_user_id_fkey"
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT "Certification_course_id_fkey"
    FOREIGN KEY (course_id) REFERENCES courses(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE UNIQUE INDEX certifications_user_id_course_id_key
  ON certifications USING btree (user_id ASC NULLS LAST, course_id ASC NULLS LAST);
CREATE UNIQUE INDEX certifications_certificate_code_key
  ON certifications USING btree (certificate_code ASC NULLS LAST);

-- ── course_ratings ────────────────────────────────────────────────────────────
CREATE TABLE course_ratings (
  id         SERIAL PRIMARY KEY,
  user_id    INTEGER NOT NULL,
  course_id  INTEGER NOT NULL,
  rating     INTEGER NOT NULL,
  created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "CourseRatings_user_id_fkey"
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT "CourseRatings_course_id_fkey"
    FOREIGN KEY (course_id) REFERENCES courses(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE UNIQUE INDEX course_ratings_user_id_course_id_key
  ON course_ratings USING btree (user_id ASC NULLS LAST, course_id ASC NULLS LAST);

-- ── forum_tags ────────────────────────────────────────────────────────────────
CREATE TABLE forum_tags (
  id   SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);
CREATE UNIQUE INDEX forum_tags_name_key ON forum_tags USING btree (name ASC NULLS LAST);

-- ── forum_posts ───────────────────────────────────────────────────────────────
CREATE TABLE forum_posts (
  id         SERIAL PRIMARY KEY,
  user_id    INTEGER NOT NULL,
  title      TEXT NOT NULL,
  body       TEXT NOT NULL,
  created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "ForumPosts_user_id_fkey"
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);

-- ── forum_replies ─────────────────────────────────────────────────────────────
CREATE TABLE forum_replies (
  id         SERIAL PRIMARY KEY,
  post_id    INTEGER NOT NULL,
  user_id    INTEGER NOT NULL,
  body       TEXT NOT NULL,
  created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "ForumReplies_post_id_fkey"
    FOREIGN KEY (post_id) REFERENCES forum_posts(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT "ForumReplies_user_id_fkey"
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);

-- ── forum_post_tags ───────────────────────────────────────────────────────────
CREATE TABLE forum_post_tags (
  id      SERIAL PRIMARY KEY,
  post_id INTEGER NOT NULL,
  tag_id  INTEGER NOT NULL,
  CONSTRAINT "ForumPostTags_post_id_fkey"
    FOREIGN KEY (post_id) REFERENCES forum_posts(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT "ForumPostTags_tag_id_fkey"
    FOREIGN KEY (tag_id) REFERENCES forum_tags(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE UNIQUE INDEX forum_post_tags_post_id_tag_id_key
  ON forum_post_tags USING btree (post_id ASC NULLS LAST, tag_id ASC NULLS LAST);

-- ── forum_reply_tags ──────────────────────────────────────────────────────────
CREATE TABLE forum_reply_tags (
  id       SERIAL PRIMARY KEY,
  reply_id INTEGER NOT NULL,
  tag_id   INTEGER NOT NULL,
  CONSTRAINT "ForumReplyTags_reply_id_fkey"
    FOREIGN KEY (reply_id) REFERENCES forum_replies(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT "ForumReplyTags_tag_id_fkey"
    FOREIGN KEY (tag_id) REFERENCES forum_tags(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE UNIQUE INDEX forum_reply_tags_reply_id_tag_id_key
  ON forum_reply_tags USING btree (reply_id ASC NULLS LAST, tag_id ASC NULLS LAST);

-- ── forum_post_likes ──────────────────────────────────────────────────────────
CREATE TABLE forum_post_likes (
  id         SERIAL PRIMARY KEY,
  post_id    INTEGER NOT NULL,
  user_id    INTEGER NOT NULL,
  created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "ForumPostLikes_post_id_fkey"
    FOREIGN KEY (post_id) REFERENCES forum_posts(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT "ForumPostLikes_user_id_fkey"
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE UNIQUE INDEX forum_post_likes_post_id_user_id_key
  ON forum_post_likes USING btree (post_id ASC NULLS LAST, user_id ASC NULLS LAST);

-- ── forum_reply_likes ─────────────────────────────────────────────────────────
CREATE TABLE forum_reply_likes (
  id         SERIAL PRIMARY KEY,
  reply_id   INTEGER NOT NULL,
  user_id    INTEGER NOT NULL,
  created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "ForumReplyLikes_reply_id_fkey"
    FOREIGN KEY (reply_id) REFERENCES forum_replies(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT "ForumReplyLikes_user_id_fkey"
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE UNIQUE INDEX forum_reply_likes_reply_id_user_id_key
  ON forum_reply_likes USING btree (reply_id ASC NULLS LAST, user_id ASC NULLS LAST);
