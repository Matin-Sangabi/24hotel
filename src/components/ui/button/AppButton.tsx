import React from 'react'
import {  AppButtonProps } from '../../../types';


export default function AppButton({type="button" , isLoading = false , children}  : AppButtonProps) {
  return (
    <button disabled={isLoading} className="btn btn-primary  btn-block" type={type}>
      {isLoading ? "loading..." : children}
    </button>
  );
}
