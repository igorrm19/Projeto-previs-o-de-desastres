create table desastre (
    id integer primary key autoincrement,
    data text,
    local text,
    tipo text,
    descricao text
);
create index idx_data on desastre (data);
create index idx_local on desastre (local);
create index idx_tipo on desastre (tipo);
create index idx_descricao on desastre (descricao);
create index idx_data_local on desastre (data, local);
create index idx_data_tipo on desastre (data, tipo);
create index idx_data_descricao on desastre (data, descricao);
create index idx_local_tipo on desastre (local, tipo);
create index idx_local_descricao on desastre (local, descricao);
create index idx_tipo_descricao on desastre (tipo, descricao);
create index idx_data_local_tipo on desastre (data, local, tipo);
create index idx_data_local_descricao on desastre (data, local, descricao);
create index idx_data_tipo_descricao on desastre (data, tipo, descricao);
create index idx_local_tipo_descricao on desastre (local, tipo, descricao);
create index idx_data_local_tipo_descricao on desastre (data, local, tipo, descricao);
create index idx_data_local_tipo_descricao on desastre (data, local, tipo, descricao);
create index idx_data_local_tipo_descricao on desastre (data, local, tipo, descricao);
create index idx_data_local_tipo_descricao on desastre (data, local, tipo, descricao);