import {TokenHistoryEntry} from './token_history_entry';

import {IIdentity} from '@essential-projects/iam_contracts';

export interface ITokenHistoryService {
  getTokensForFlowNodeInstance(identity: IIdentity, flowNodeInstanceId: string): Array<TokenHistoryEntry>;
}
