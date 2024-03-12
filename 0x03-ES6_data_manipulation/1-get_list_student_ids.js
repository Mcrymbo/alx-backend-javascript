const getListStudentId = (list) => {
  if (!Array.isArray(list)) {
    return [];
  }

  return list.map((item) => item.id);
};

export default getListStudentId;
