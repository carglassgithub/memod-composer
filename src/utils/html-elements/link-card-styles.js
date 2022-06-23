export const EDITOR_LINK_STYLES = `
.editor-link-card {
  text-decoration: none;
  display: flex;
  border-radius: 10px;
  min-height: 100px;
  overflow: hidden;
  background-color: #2C2C2E !important;
  font-family: "Gibson" !important;
  line-height: 1.31em !important;
  position: relative;
}

.editor-link-card .card-image {
  background-color: #242425;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
}

.memo-link-card .card-image {
  width: 35%;
  max-width: 203.09px;
}

.editor-link-card.no-image .card-image {
  display: none;
}

.editor-link-card .card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.memo-link-card .card-image.portrait img {
  width: 100px;
  margin-right: auto; 
}

.editor-link-card .card-container {
  color: white;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
}

.memo-link-card .card-container {
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  padding-right: 45px;
}

.editor-link-card.no-image .card-container {
  width: 100%;
}

.editor-link-card .card-container .favicon-and-name-container {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.editor-link-card .card-container .favicon-and-name-container .favicon {
  width: 20px;
  margin-right: 6px;
}

.editor-link-card .card-container .card-description {
  font-size: 18px !important;
  line-height: 18px !important;
  margin-bottom: 5px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.memo-link-card .card-container .card-description {
  text-align: right;
  white-space: pre-line;
  word-break: break-word;
}

.editor-link-card .card-container .web-link {
  font-size: 14px !important;
  color: rgba(235, 235, 245, 0.6) !important;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.editor-link-card .card-container .web-link .link-icon {
  width: 16px;
  height: 17px;
  background-image: url('/assets/link.svg');
  margin-right: 2px;
}

.editor-link-card .card-container .web-link .user-icon {
  width: 16px;
  height: 17px;
  background-image: url('/assets/profile.svg');
  margin-right: 2px;
}

.link-card-remove {
  width: 24px;
  height: 24px;
  display: inline-block;
  background-image: url('/assets/close-toolbar.svg');
  position: absolute;
  right: 15px;
  top: 15px;
}

.memo-link-card {
  height: 134px;
  margin-top: 5px;
}

.memo-link-card .link-card-left {
  display: flex;
  width: 30%;
  height: 100%;
}

.memo-link-card .link-card-remove {
  background-image: url('/assets/trash-can.svg');
  background-size: 19px;
  background-repeat: no-repeat;
  background-color: #3e3e41;
  border-radius: 100%;
  background-position: center;
  cursor: pointer;
}
`
