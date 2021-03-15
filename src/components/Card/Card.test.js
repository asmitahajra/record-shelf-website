/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

describe(Card.name, () => {
  const mockProp = {
    onIncrement: jest.fn(),
    eachSong: {
      nameSong: 'artist',
      artist: 'abc',
      count: 5,
      like: true,
      albumArtUrl: 'abc',
    },
  };

  test('should match snapshot', () => {
    const { container } = render(<Card {...mockProp} />);
    expect(container).toMatchSnapshot();
  });
});
