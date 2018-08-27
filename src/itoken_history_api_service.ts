import {TokenHistoryEntry} from './token_history_entry';

import {IIdentity} from '@essential-projects/iam_contracts';

/**
 * Contains functions for reading Process Tokens.
 */
export interface ITokenHistoryApiService {

  /**
   * Returns a list of all Process Tokens that have been recorded for a specific Flow Node.
   *
   * @async
   * @param identity       The identity of the requesting user.
   * @param correlationId  The ID of the Correlation that contains the Process Model to which the Flow Node belongs.
   * @param processModelId The ID of the Process Model that contains the Flow Node.
   * @param flowNodeId     The ID of the Flow Node for which to retrieve the Process Tokens.
   * @returns              A list of Process Tokens for the given Flow Node.
   */
  getTokensForFlowNode(identity: IIdentity,
                       correlationId: string,
                       processModelId: string,
                       flowNodeId: string): Promise<Array<TokenHistoryEntry>>;
}
