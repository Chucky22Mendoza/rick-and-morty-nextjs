import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import InputFilter from '@/components/ui/InputFilter';

describe('InputFilter', () => {
  // Renders input element with provided props
  it('should render input element with provided props', () => {
    const propsInput = { placeholder: 'Filter by name' };
    const { getByPlaceholderText } = render(<InputFilter propsInput={propsInput} />);
    const inputElement = getByPlaceholderText('Filter by name');
    expect(inputElement).toBeInTheDocument();
  });

  // Handles null or undefined onChange gracefully
  it('should handle null or undefined onChange gracefully', () => {
    const propsInput = { placeholder: 'Filter by name' };
    const { getByPlaceholderText } = render(<InputFilter propsInput={propsInput} />);
    const inputElement = getByPlaceholderText('Filter by name') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(inputElement.value).toBe('test');
  });

  // Calls onChange with correct value when input changes
  it('should call onChange with correct value when input changes', () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(<InputFilter propsInput={{}} onChange={onChangeMock} />);
    const inputElement = getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(onChangeMock).toHaveBeenCalledWith('test');
  });

  // Calls onClick when button is clicked
  it('should call onClick when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(<InputFilter propsInput={{}} onClick={onClickMock} />);
    const buttonElement = getByRole('button');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });

  // Renders button with correct image
  it('should render button with correct image', () => {
    const propsInput = { placeholder: 'Filter by name' };
    const { getByAltText } = render(<InputFilter propsInput={propsInput} />);
    const imageElement = getByAltText('Filtrar');
    expect(imageElement).toBeInTheDocument();
  });

  // Handles rapid input changes
  it('should handle rapid input changes', () => {
    const onChangeMock = jest.fn();
    const propsInput = { placeholder: 'Filter by name' };
    const { getByPlaceholderText } = render(<InputFilter propsInput={propsInput} onChange={onChangeMock} />);
    const inputElement = getByPlaceholderText('Filter by name');

    fireEvent.change(inputElement, { target: { value: 'test' } });
    fireEvent.change(inputElement, { target: { value: 'testing' } });

    expect(onChangeMock).toHaveBeenCalledTimes(2);
    expect(onChangeMock).toHaveBeenCalledWith('test');
    expect(onChangeMock).toHaveBeenCalledWith('testing');
  });

  // Handles empty propsInput object
  it('should handle empty propsInput object', () => {
    const propsInput = {};
    const { getByRole } = render(<InputFilter propsInput={propsInput} />);
    const inputElement = getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  // Handles null or undefined onClick gracefully
  it('should handle null or undefined onClick gracefully', () => {
    const propsInput = { placeholder: 'Filter by name' };
    const { getByPlaceholderText } = render(<InputFilter propsInput={propsInput} onClick={undefined} />);
    const inputElement = getByPlaceholderText('Filter by name');
    expect(inputElement).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button'));
  });
});
