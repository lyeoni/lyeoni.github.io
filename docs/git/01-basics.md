---
layout: default
title: 01-Basics
parent: Git
nav_order : 1
---

# 01-Basics

## branch

### branch 생성
```bash
$ git branch {branch_name}
```

### branch checkout
```bash
$ git checkout {branch_name}

# branch 생성과 동시에 checkout
$ git checkout -b {branch_name}
```

### branch 삭제
```bash
$ git branch -d {branch_name}
```

### branch 이름 변경
```bash
# local
$ git branch -m {변경전_branch_name} {새로운_branch_name}

# remote
$ git push origin :{변경전_branch_name} # 이전 branch 삭제
$ git push --set-upstream origin {새로운_branch_name} # 새로운 branch 업로드
```

### remote branch 가져오기
```bash
# remote branch 와 동일한 이름으로 branch 가져온다
$ git checkout -t {remote_branch_name} # e.g. origin/master

# detached 상태로 remote branch 가져온다. 다른 branch로 checkout하면 사라짐
$ git checkout {remote_branch_name}
```

