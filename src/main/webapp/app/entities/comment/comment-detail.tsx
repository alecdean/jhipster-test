import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './comment.reducer';
import { IComment } from 'app/shared/model/comment.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICommentDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const CommentDetail = (props: ICommentDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { commentEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="jhipsterTestApp.comment.detail.title">Comment</Translate> [<b>{commentEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="text">
              <Translate contentKey="jhipsterTestApp.comment.text">Text</Translate>
            </span>
          </dt>
          <dd>{commentEntity.text}</dd>
          <dt>
            <span id="creationDate">
              <Translate contentKey="jhipsterTestApp.comment.creationDate">Creation Date</Translate>
            </span>
          </dt>
          <dd>
            {commentEntity.creationDate ? (
              <TextFormat value={commentEntity.creationDate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <Translate contentKey="jhipsterTestApp.comment.post">Post</Translate>
          </dt>
          <dd>{commentEntity.post ? commentEntity.post.title : ''}</dd>
        </dl>
        <Button tag={Link} to="/comment" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/comment/${commentEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ comment }: IRootState) => ({
  commentEntity: comment.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CommentDetail);
