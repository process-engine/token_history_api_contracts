import {TokenHistoryEntry} from './token_history_entry';

import {IIdentity} from '@essential-projects/iam_contracts';

/**
 * Contains functions for reading process tokens.
 */
export interface ITokenHistoryService {
  /**
   * Returns a list of all process tokens that have been recorded for a specific flow node instance.
   *
   * @param identity           The identity of the requesting user.
   * @param flowNodeInstanceId The id of the flow node instance for which to retrieve the process tokens.
   * @returns                  A list of process tokens for the given flow node instance.
   */
  getTokensForFlowNodeInstance(identity: IIdentity, flowNodeInstanceId: string): Array<TokenHistoryEntry>;
}
