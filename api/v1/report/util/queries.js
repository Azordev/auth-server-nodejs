module.exports = {
  deleteReport: [
    'delete_reports',
    `mutation delete_reports($report_id: uuid) {
      delete_reports(where: {report_id: {_eq: $report_id}}) {
        affected_rows
      }
    }`
  ],
  getReportAll: [
    'reports',
    `query reports {
      reports(limit: 20) {
        client
        company
        invoice_id
        items
        report_id
        status
        total
        created_at
        updated_at
      }
    }`
  ],
  getReportId: [
    'reports',
    `query reports($report_id: uuid) {
      reports(limit: 20, where: {report_id: {_eq: $report_id}}) {
        client
        company
        invoice_id
        items
        report_id
        status
        total
        created_at
        updated_at
      }
    }`
  ],
  postReport: [
    'insert_reports',
    `mutation insert_reports($client: name, $company: name, $items: String, $status: Boolean, $total: money) {
      insert_reports(objects: {client: $client, company: $company, items: $items, status: $status, total: $total}) {
        affected_rows
      }
    }`
  ],
  putReport: [
    'update_reports',
    `mutation update_reports($report_id: uuid, $client: name, $company: name, $items: String, $status: Boolean, $total: money) {
      update_reports(where: {report_id: {_eq: $report_id}}, _set: {client: $client, company: $company, items: $items, status: $status, total: $total}) {
        affected_rows
      }
    }`
  ]
}
