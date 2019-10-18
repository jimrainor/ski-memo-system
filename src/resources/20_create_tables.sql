CREATE SCHEMA developx;
SET search_path TO developx;

DROP TABLE IF EXISTS trip_detail CASCADE;
CREATE TABLE trip_detail(
    uuid varchar(32) NOT NULL,
    startdate varchar(100),
    enddate varchar(100),
    costmoney varchar(100),
    placename varchar(100),
    hotel varchar(100),
    menber varchar(100),
    book_no varchar(100),
    created_user_id varchar(32),
    created_datetime timestamp(3) with time zone DEFAULT current_timestamp,
    updated_user_id varchar(32),
    updated_datetime timestamp(3) with time zone DEFAULT current_timestamp,
    PRIMARY KEY(uuid)
);
COMMENT ON TABLE trip_detail IS '明細';
COMMENT ON COLUMN trip_detail.created_user_id IS '作成ユーザID';
COMMENT ON COLUMN trip_detail.created_datetime IS '作成日時';
COMMENT ON COLUMN trip_detail.updated_user_id IS '更新ユーザID';
COMMENT ON COLUMN trip_detail.updated_datetime IS '更新日時';
