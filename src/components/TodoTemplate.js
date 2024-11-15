import "../styles/todotemplate.scss";

const TodoTemplate = ({ children }) => {
 return (
  <div className="todo-template">
   <div className="app-title">할일 목록 관리</div>
   {/* children에 컴포넌트 배치 */}
   <div className="content">{children}</div>
  </div>
 );
};

export default TodoTemplate;
