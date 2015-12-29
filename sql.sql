drop table if exists GOODS;

drop table if exists ISALE_ORDER;

drop table if exists LOGISTICS;

drop table if exists MEMBER;

/*==============================================================*/
/* Table: GOODS                                                 */
/*==============================================================*/
create table GOODS
(
   ID                   int not null comment '商品ID',
   NAME                 varchar(50) not null comment '商品名称',
   PRICE                float(10,2) not null comment '商品单价',
   CREATE_TIME          datetime comment '创建时间',
   UPDATE_TIME          datetime comment '修改时间',
   primary key (ID)
);

alter table GOODS comment '商品';

/*==============================================================*/
/* Table: ISALE_ORDER                                           */
/*==============================================================*/
create table ISALE_ORDER
(
   ID                   int not null,
   ORDER_ID             char(18) not null comment '订单编号：YYYYMMDDHHmmssXXXX',
   GOOD_ID              int not null,
   MEMB_ID              int comment '会员ID',
   LOGISTIC_ID          int comment '物流信息ID',
   PAY_TIME             datetime comment '支付时间',
   NUM                  int comment '购买数量',
   PAY_SUM              float(10,2) comment '支付金额',
   PAY_WAY              char comment '支付方式
            1：支付宝
            2：微信',
   ORDER_STATE          char comment '订单状态
            0：未发货
            1：已发货
            2：退货',
   REMARK               varchar(100) comment '备注',
   CREATE_TIME          datetime comment '创建时间',
   UPDATE_TIME          datetime comment '修改时间',
   primary key (ID)
);

alter table ISALE_ORDER comment '订单表';

/*==============================================================*/
/* Table: LOGISTICS                                             */
/*==============================================================*/
create table LOGISTICS
(
   ID                   int,
   CODE                 varchar(20) comment '物流编码',
   CREATE_TIME          datetime,
   UPDATE_TIME          datetime
);

alter table LOGISTICS comment '物流信息';

/*==============================================================*/
/* Table: MEMBER                                                */
/*==============================================================*/
create table MEMBER
(
   ID                   int not null,
   TEL                  char(11),
   EMAIL                varchar(50),
   ADDRESS              varchar(100),
   CREATE_TIME          datetime,
   UPDATE_TIME          datetime,
   primary key (ID)
);

alter table MEMBER comment '会员信息表';
