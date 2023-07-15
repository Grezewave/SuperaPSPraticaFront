import React from 'react';
import { getStatement } from '../../service/get';

export const StatementController =
  async (startTime: string, endTime: string, operatorName: string) => {

  const params = {
    startTime: startTime === '' ? undefined : startTime,
    endTime: endTime === '' ? undefined : endTime,
    operatorName: operatorName === '' ? undefined : operatorName,
  };

  return getStatement(params)
}