import React from 'react';
import Post from './Post';
import { PostData } from '../../fixtures/index';

export const Primary = () => <Post post={PostData} />;

Primary.storyName = 'Post Component';
