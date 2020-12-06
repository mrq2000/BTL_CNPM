import Enum from './Enum';

class RequestStatus extends Enum {
  getTitleStatus(key) {
    switch (key) {
      case this.NEW:
        return 'Mới tiếp nhận';
      case this.PENDING:
        return 'Đang xử lý';
      case this.DONE:
        return 'Đã phản hồi';
      default:
        return '';
    }
  }
}

export default new RequestStatus({
  NEW: 0,
  PENDING: 1,
  DONE: 2,
});
