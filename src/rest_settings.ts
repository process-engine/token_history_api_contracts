// tslint:disable:typedef
const params = {
  processModelId: ':process_model_id',
  correlationId: ':correlation_id',
  flowNodeId: ':flow_node_id',
};

const paths = {
  getTokensForFlowNode: `/correlation/${params.correlationId}/process_model/${params.processModelId}/flow_node/${params.flowNodeId}`,
};

/**
 * Contains the endpoints and various rest parameters used by the Token History API.
 */
export const restSettings = {
  /**
   * A collection of all url parameters employed by the Token History API.
   */
  params: params,
  /**
   * A collection of all urls employed by the Token History API.
   */
  paths: paths,
};
