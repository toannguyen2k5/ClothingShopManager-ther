import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import './CommentManager.css';

export default class CommentManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      filterText: '',
      showModal: false,
      replyingTo: null,
      currentReply: '',
    };
  }

  componentDidMount() {
    this.setState({
      comments: [
        { id: 1, productId: 'P001', shopId:"S001", author: 'Nguyen A', content: 'Sản phẩm rất tốt!', rating: 5, status: CommentStatus.REVIEWED, date: '2025-04-20', hidden: false, reply: '' },
        { id: 2, productId: 'P002', shopId:"S001", author: 'Tran B', content: 'Chất lượng ổn.', rating: 4, status: CommentStatus.BEFORE_PURCHASE, date: '2025-04-22', hidden: false, reply: '' }
      ]
    });
  }

  handleFilter = e => this.setState({ filterText: e.target.value });

  openReplyModal = (row) => this.setState({ showModal: true, replyingTo: row.id, currentReply: row.reply || '' });

  closeModal = () => this.setState({ showModal: false, replyingTo: null, currentReply: '' });

  handleReplyChange = e => this.setState({ currentReply: e.target.value });
  renderStatusLabel = (status) => {
    switch (status) {
      case CommentStatus.BEFORE_PURCHASE:
        return 'Chưa mua';
      case CommentStatus.AFTER_PURCHASE:
        return 'Đã mua';
      case CommentStatus.REVIEWED:
        return 'Đã đánh giá';
      default:
        return '-';
    }
  }
  saveReply = () => {
    this.setState(prev => ({
      comments: prev.comments.map(c =>
        c.id === prev.replyingTo ? { ...c, reply: prev.currentReply } : c
      ),
      showModal: false,
      replyingTo: null,
      currentReply: ''
    }));
  }

  hideComment = id => {
    this.setState(prev => ({
      comments: prev.comments.map(c =>
        c.id === id ? { ...c, hidden: true } : c
      )
    }));
  }

  render() {
    const { comments, filterText, showModal, currentReply, replyingTo } = this.state;
    const visible = comments.filter(c => !c.hidden && (
      c.productId.includes(filterText) || c.author.toLowerCase().includes(filterText.toLowerCase())
    ));
    const replyingComment = comments.find(c => c.id === replyingTo);
    const columns = [
      { name: 'Mã SP', selector: row => row.productId, sortable: true, width: '100px' },
      { name: 'Mã Shop', selector: row => row.shopId, sortable: true, width: '150px' },
      { name: 'Người bình luận', selector: row => row.author, sortable: true, width: '150px' },
      { name: 'Nội dung', selector: row => row.content, wrap: true },
      { name: 'Đánh giá', selector: row => row.rating, width: '100px' },
      { name: 'Trạng thái', selector: row => this.renderStatusLabel(row.status), width: '160px' },
      { name: 'Ngày', selector: row => row.date, width: '120px' },
      { name: 'Trả lời', selector: row => row.reply || '-', wrap: true },
      {
        name: 'Hành động',
        cell: row => (
          <div className="action-buttons">
            <button onClick={() => this.openReplyModal(row)} className="edit-btn" title="Trả lời"><i className="bi bi-reply"></i></button>
            <button onClick={() => this.hideComment(row.id)} className="delete-btn" title="Ẩn bình luận"><i className="bi bi-eye-slash-fill"></i></button>
          </div>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        width: '180px'
      }
    ];

    return (
      <div className="comment-manager">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"/>
        <h2>Quản lý Bình luận sản phẩm</h2>
        <div className="cm-toolbar">
          <input type="text" placeholder="Tìm SP hoặc tác giả..." value={filterText} onChange={this.handleFilter} className="cm-search" />
        </div>
        <DataTable columns={columns} data={visible} pagination highlightOnHover responsive />

        {showModal && (
          <div className="cm-modal-overlay" onClick={this.closeModal}>
          <div className="cm-modal-content" onClick={e => e.stopPropagation()}>
            <h3>Trả lời bình luận</h3>
            <div className="cm-comment-info">
              <p><strong>Mã SP:</strong> {replyingComment.productId}</p>
              <p><strong>Người bình luận:</strong> {replyingComment.author}</p>
              <p><strong>Ngày:</strong> {replyingComment.date}</p>
              <p><strong>Đánh giá:</strong> {replyingComment.rating} sao</p>
              <div className="cm-form">
              <label><strong>Nội dung:</strong> </label>
              <textarea readOnly={true}>{replyingComment.content}</textarea>
              </div>
            </div>
            <div className="cm-form">
              <label><strong>Trả lời:</strong> </label>
                <textarea name="reply" value={currentReply} onChange={this.handleReplyChange} />
              
            </div>
            <div className="cm-modal-actions">
              <button onClick={this.saveReply} className="cm-save-btn">Lưu</button>
              <button onClick={this.closeModal} className="cm-cancel-btn">Hủy</button>
            </div>
          </div>
        </div>
        )}
      </div>
    );
  }
}
export const CommentStatus = Object.freeze({
    BEFORE_PURCHASE: 'BEFORE_PURCHASE', // Bình luận trước khi mua
    AFTER_PURCHASE: 'AFTER_PURCHASE',   // Đã mua nhưng chưa đánh giá
    REVIEWED: 'REVIEWED',                // Đã mua và đã đánh giá
  });