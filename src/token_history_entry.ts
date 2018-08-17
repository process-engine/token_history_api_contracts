import {IIdentity} from '@essential-projects/iam_contracts';

import {TokenType} from './token_type';

/**
 * Describes a Process Token of a specific Flow Node Instance.
 */
export class TokenHistoryEntry {
  public flowNodeId: string;
  public flowNodeInstanceId: string;
  public processInstanceId: string;
  public processModelId: string;
  public correlationId: string;
  public tokenType: TokenType;
  public identity: IIdentity;
  public createdAt: Date;
  public caller: string; // Only set, if the token belongs to the FNI of a subprocess.
  public payload: any;
}
