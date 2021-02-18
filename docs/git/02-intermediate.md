---
layout: default
title: 02-Intermediate
parent: Git
nav_order : 2
---

# 02-Intermediate

## commit

### commit message 변경
```bash
$ git commit --amend
```

## reset
```bash
$ git reset {option} {commit_id}
```

### Example : add reset
```bash
# file_name 없는 경우 add한 파일 unstaged. 더 자세한 설명은 아래 commit reset 에서 확인 가능
$ git reset HEAD {file_name}
```

### Example : commit reset
```bash
# 1. commit ID 확인
$ git log

# 2. reset
# {option}=hard : commit 취소 + commit_id 이후 생성/변경된 내용들은 삭제
$ git reset --hard {commit_id}

# {option}=soft : commit 취소 + commit_id 이후 생성/변경된 내용들은 staged
$ git reset --soft {commit_id}

# {option}=mixed : default. commit 취소 + commit_id 이후 생성/변경된 내용들은 unstaged
$ git reset --mixed {commit_id}

# 최근 6개 commit 취소
$ git reset HEAD~6
```

## diff
```bash
# 현재 branch와 다른 branch간 diff 
$ git diff {branch_name}

# 현재 branch와 다른 branch 간 특정 파일에 대한 diff
$ git diff {branch_name} {file_name}
# branch 간 특정 파일에 대한 diff
$ git diff {branch_name1} {branch_name2} {file_name}
```

## clean
```bash
# -d : dircetory 삭제
# -f : directory 제외한 file 삭제
# -n : 삭제될 대상 확인
$ git clean {option}

# 삭제될 대상 파일 확
$ git clean -f -n 
```

## branch
### 다른 branch 파일 가져오기
