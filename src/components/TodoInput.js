// src/components/TodoInput.js
import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { activeItem, editItem, handleChange, handleSubmit } = this.props;
    return (
      <div className="card card-body">
        <form action="">
          <div className="form-group">
            <label>Responsável</label>
            <input
              type="text"
              name="responsavel"
              className="form-control text-capitalize"
              placeholder="add responsável"
              value={activeItem.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Descrição</label>
            <input
              type="text"
              name="descricao"
              className="form-control text-capitalize"
              placeholder="add descrição"
              value={activeItem.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Nivel</label>
            <input
              type="text"
              name="nivel"
              className="form-control text-capitalize"
              placeholder="add nível"
              value={activeItem.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Prioridade</label>
            <input
              type="text"
              name="situacao"
              className="form-control text-capitalize"
              placeholder="add prioridade"
              value={activeItem.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              name="situacao"
              className="form-check-input"
              checked={activeItem.completed}
              onChange={handleChange}
            />
            <label className="form-check-label">Situação</label>
          </div>
          <button
            type="submit"
            className={
              editItem ? "btn btn-success mt-3" : "btn btn-primary mt-3"
            }
            onClick={() => handleSubmit(activeItem)}
          >
            {editItem ? "Edit" : "Add"}
          </button>
        </form>
      </div>
    );
  }
}