import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { AddWebsite } from 'components/AddWebsite';
import * as ReactQuery from '@tanstack/react-query';
import * as Utils from 'utils/utils';
import * as ReactHotToast from 'react-hot-toast';

// Mocking the required modules
jest.mock('@tanstack/react-query');
jest.mock('utils/utils');
jest.mock('react-hot-toast');

describe('<AddWebsite />', () => {
  
  const mockUseQueryClient = ReactQuery.useQueryClient as jest.Mock;
  const mockAddWebsite = Utils.addWebsite as jest.Mock;
  const mockCheckIfAtleastHttp = Utils.checkIfAtleastHttp as jest.Mock;
  const mockErrorToast = ReactHotToast.toast.error as jest.Mock;

  beforeEach(() => {
    mockUseQueryClient.mockReturnValue({
      invalidateQueries: jest.fn()
    });
    mockCheckIfAtleastHttp.mockReturnValue(true);
    mockAddWebsite.mockResolvedValue(undefined);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the input and button', () => {
    render(<AddWebsite />);
    
    expect(screen.getByPlaceholderText('Enter website to add...')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('adds a valid website', async () => {
    render(<AddWebsite />);

    const input = screen.getByPlaceholderText('Enter website to add...');
    fireEvent.change(input, { target: { value: 'https://example.com' } });
    fireEvent.click(screen.getByRole('button'));

    // Await for potential UI updates
    await waitFor(() => expect(input).toHaveValue(''));
  });

  it('should display an error toast for invalid website', async () => {
    mockCheckIfAtleastHttp.mockReturnValueOnce(false);

    render(<AddWebsite />);

    const input = screen.getByPlaceholderText('Enter website to add...');
    fireEvent.change(input, { target: { value: 'invalidURL' } });
    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => expect(mockErrorToast).toHaveBeenCalledWith('Not valid website'));
  });

  it('should clear the input after successful addition', async () => {
    render(<AddWebsite />);

    const input = screen.getByPlaceholderText('Enter website to add...');
    fireEvent.change(input, { target: { value: 'https://example.com' } });
    fireEvent.click(screen.getByLabelText('button-add-website'));

    await new Promise(resolve => setTimeout(resolve, 1000));

    expect(input).toHaveValue('');
  });

});
