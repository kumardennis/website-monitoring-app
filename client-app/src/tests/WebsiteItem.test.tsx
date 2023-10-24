import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { WebsiteItem } from 'components/WebsiteItem';
import { StatusModel } from 'models/StatusModels';
import { faCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCircle, faTrash);  // Ensures the icons are available during tests

describe('<WebsiteItem />', () => {
  const onDeleteMock = jest.fn();

  beforeEach(() => {

    onDeleteMock.mockReset();
  });



  it('displays the correct website URL', () => {
    const url = 'https://test.com';
    render(<WebsiteItem websiteUrl={url} status={"ok" as unknown as StatusModel} onDelete={onDeleteMock} />);
    expect(screen.getByText(url)).toBeInTheDocument();
  });

  it('calls onDelete function with correct URL when delete button is clicked', async () => {
     render(<WebsiteItem websiteUrl="https://delete.com" status={"ok" as unknown as StatusModel} onDelete={onDeleteMock} />);
    const deleteButton = screen.getByRole('button');
    fireEvent.click(deleteButton);

    await waitFor(() => expect(onDeleteMock).toHaveBeenCalledWith('https://delete.com'));
  });
});
