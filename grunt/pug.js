module.exports = {
	pug: {
		options: {
			data: {
				debug: false
			},
			pretty: true
		},
		files: {
			'<%=project.dist %>/index.html': '<%=project.app %>/tpls/index.pug',
			'<%=project.dist %>/example.html': '<%=project.app %>/tpls/example.pug'
		}
	}
};
