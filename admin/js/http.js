/* 沙箱模式 */
(function(window) {
  // 获取有没有token令牌;
  const token = localStorage.getItem("token");
  $.ajaxSetup({
    beforeSend(xhr) {
      if (!token) {
        location.href = "./login.html";
      }
      if (location.href.indexOf("login.html") === -1) {
        xhr.setRequestHeader("Authorization", token);
      }
    }
  });

  //   url封装
  const baseURL = "http://localhost:8080/api/v1";
  const urls = {
    //   获取用户信息
    userInfo: baseURL + "/admin/user/info",
    // 获取用户详情
    userDetail: baseURL + "/admin/user/detail",
    // 编辑用户信息
    userEdit: baseURL + "/admin/user/edit",
    category_list: baseURL + "/admin/category/list", //文章类别查询
    category_add: baseURL + "/admin/category/add", //文章类别新增
    category_search: baseURL + "/admin/category/search", //文章类别搜索
    category_edit: baseURL + "/admin/category/edit", //文章类别编辑
    category_delete: baseURL + "/admin/category/delete", //文章类别删除
    article_query: baseURL + "/admin/article/query", //文章搜索
    article_publish: baseURL + "/admin/article/publish", //文章发布
    article_search: baseURL + "/admin/article/search", //文章信息查询
    article_edit: baseURL + "/admin/article/edit", //文章编辑
    article_delete: baseURL + "/admin/article/delete", //文章删除
    comment_list: baseURL + "/admin/comment/search", //文章评论列表
    comment_pass: baseURL + "/admin/comment/pass", //文章评论通过
    comment_reject: baseURL + "/admin/comment/reject", //文章评论不通过
    comment_delete: baseURL + "/admin/comment/delete" //文章评论删除
  };
  // 把urls对象暴露到全局 window对象中
  window.urls = urls;
})(window);
