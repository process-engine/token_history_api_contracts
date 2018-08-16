// tslint:disable:typedef
const params = {
  flowNodeInstanceId: ':flow_node_instance_id',
};

const paths = {
  getTokensForFlowNodeInstance: `/flow_node_instance/${params.flowNodeInstanceId}`,
};

/**
 * Contains the endpoints and various rest parameters used by the token history api.
 */
export const restSettings = {
  /**
   * A collection of all url parameters employed by the token history api.
   */
  params: params,
  /**
   * A collection of all urls employed by the token history api.
   */
  paths: paths,
};
